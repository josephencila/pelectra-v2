import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import useMonthlyAppliances from "../../hooks/useMonthlyAppliances";
import { daysInMonth, roundTo3Decimals } from "../../helpers/helper";
import usePrevious from "../../hooks/usePrevious";

const BASE_URL = "http://localhost:4000/api/v1/appliances/read";

const AddMonthlyAppliances = ({ setToggleAdd }) => {
  const { currentDate } = useMonthlyAppliances();

  const [userAppliances, setUserAppliances] = useState([]);

  useEffect(() => {
    const fetchAppliancesByUser = async () => {
      try {
        const response = await fetch(BASE_URL, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        });

        const result = await response.json();
        setUserAppliances(result.data);
      } catch (error) {
        console.log(error.message ?? error);
      }
    };
    fetchAppliancesByUser();
  }, []);

  const [addUserAppliances, setAddUserAppliances] = useState({
    userId: userAppliances.userId,
    appliancesId: userAppliances.appliancesId,
    appliancesName: "",
    consumptionPerHr: "",
    dailyUsage: "",
    daysInMonth: "",
    consumptionPerMonth: "",
  });
  const prevConsumptionPerHr = usePrevious(addUserAppliances.consumptionPerHr);
  const prevDailyUsage = usePrevious(addUserAppliances.dailyUsage);
  const prevDaysInMonth = usePrevious(addUserAppliances.daysInMonth);

  const addMonthlyAppliances = z.object({
    appliancesName: z
      .string()
      .min(1, { message: "Appliances Name is a required field." }),
    consumptionPerHr: z.coerce
      .number({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_type"
              ? "That's not a number."
              : defaultError,
        }),
      })
      .min(0.000001, { message: "Consumption per hour is a required field." })
      .gt(0, { message: "Consumption per hour must be greater than 0." }),
    dailyUsage: z.coerce
      .number({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_type"
              ? "That's not a number."
              : defaultError,
        }),
      })
      .min(0.000001, { message: "Consumption per hour is a required field." })
      .gt(0, { message: "Consumption per hour must be greater than 0." }),
    daysInMonth: z.coerce
      .number({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_type"
              ? "That's not a number."
              : defaultError,
        }),
      })
      .min(1, { message: "Days in Month is a required field." })
      .gt(0, { message: "Daily Usage must be greater than 0." }),
    consumptionPerMonth: z.coerce
      .number({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_type"
              ? "That's not a number."
              : defaultError,
        }),
      })
      .min(0.000001, { message: "Consumption per month is a required field." })
      .gt(0, { message: "Consumption per month be greater than 0." }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addMonthlyAppliances),
    mode: "handleOnChange",
  });

  const memoizedDaysInMonth = useMemo(() => {
    const customArray = (date) => {
      return [...Array(daysInMonth(date))].map((_, idx) => idx + 1);
    };

    return currentDate ? customArray(currentDate) : customArray(new Date());
  }, [currentDate]);

  // const calculateTotal = (days) => {
  //   const { dailyUsage, consumptionPerHr } = addUserAppliances;
  //   const oneMinute = 60;
  //   const hours = new Date(dailyUsage).getHours() * oneMinute;
  //   const minutes = new Date(dailyUsage).getMinutes() + hours;
  //   const actualTime = minutes / oneMinute;
  //   const total = consumptionPerHr * actualTime * days;

  //   return total;
  // };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    let newValue;
    let params;

    switch (name) {
      case "appliancesName":
        newValue = parseFloat(value.split(",")[1]);
        setValue("consumptionPerHr", newValue);
        clearErrors("consumptionPerHr");
        params = {
          appliancesName: value.split(",")[0],
          consumptionPerHr: newValue,
        };
        break;
      case "dailyUsage":
        params = {
          dailyUsage: value,
        };
        break;
      case "daysInMonth":
        setValue("consumptionPerMonth", newValue);
        clearErrors("consumptionPerMonth");

        setAddUserAppliances((prev) => ({
          ...prev,
          daysInMonth: value,
        }));
        break;
      default:
        params = {
          [name]: value,
        };

        break;
    }

    setAddUserAppliances((prev) => ({
      ...prev,
      ...params,
    }));
  };

  useEffect(() => {
    const { dailyUsage, consumptionPerHr, daysInMonth } = addUserAppliances;

    const calculateTotal = () => {
      let total = consumptionPerHr * dailyUsage * daysInMonth;

      return roundTo3Decimals(total, 3);
    };
    if (
      prevConsumptionPerHr !== consumptionPerHr ||
      prevDailyUsage !== dailyUsage ||
      prevDaysInMonth !== daysInMonth
    ) {
      setAddUserAppliances((prev) => ({
        ...prev,
        consumptionPerMonth: calculateTotal(),
      }));
    }
  }, [
    prevConsumptionPerHr,
    prevDailyUsage,
    prevDaysInMonth,
    addUserAppliances,
  ]);

  const onSubmit = () => {
    console.log(addUserAppliances);
  };

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-slate-900  flex justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-auto w-full max-w-md  grid grid-cols-1 content-start 
     gap-5 p-5 text-white bg-slate-800  rounded-md shadow-sm "
      >
        <div className=" flex flex-col">
          <span className="font-bold ">Add Monthly Appliances</span>
        </div>

        <div className="flex  flex-col gap-1">
          <label htmlFor="appliancesName"> Appliances Name:</label>

          <select
            className="bg-slate-700 text-white p-2 rounded-md outline-none "
            name="appliancesName"
            {...register("appliancesName", {
              onChange: handleOnChange,
            })}
            value={addMonthlyAppliances.appliancesName}
          >
            <option value="" hidden />

            {userAppliances.map((ua, idx) => {
              return (
                <option
                  value={[ua.appliancesName, ua.consumptionPerHr]}
                  key={idx}
                >
                  {ua.appliancesName}
                </option>
              );
            })}
          </select>

          <small className="text-red-500">
            {errors.appliancesName?.message}
          </small>
        </div>

        <div className="flex  flex-col gap-1">
          <label htmlFor="consumptionPerHr">Consumption (kWh):</label>

          <input
            className="bg-slate-700 text-white p-2 rounded-md outline-none "
            type="text"
            name="consumptionPerHr"
            value={addUserAppliances.consumptionPerHr}
            readOnly
            {...register("consumptionPerHr")}
          />

          <small className="text-red-500">
            {errors.consumptionPerHr?.message}
          </small>
        </div>

        <div className="flex  flex-col gap-1">
          <label htmlFor="dailyUsage">Daily Usage:</label>

          {/* <Controller
            control={control}
            name="dailyUsage"
            defaultValue={addUserAppliances.dailyUsage}
            render={({ field: { onChange, onBlur, value, ref, name } }) => (
              <>
                <DatePicker
                  ref={ref}
                  onBlur={onBlur}
                  onChange={(data) => {
                    onChange(data),
                      {
                        ...register("dailyUsage", {
                          onChange: handleOnChange({
                            target: { value: data, name: name },
                          }),
                        }),
                      };
                  }}
                  selected={value}
                  showTimeSelect
                  showTimeSelectOnly
                  dateFormat="HH:mm"
                  timeFormat="HH:mm"
                  className="bg-slate-700 text-white p-2 rounded-md outline-none w-full "
                  minTime={new Date().setHours(0, 1, 0)}
                  maxTime={new Date().setHours(23, 59, 59)}
                  timeIntervals={1}
                  timeCaption="Usage"
                />
              </>
            )}
          /> */}

          <select
            className="bg-slate-700 text-white p-2 rounded-md outline-none "
            name="dailyUsage"
            {...register("dailyUsage", {
              onChange: handleOnChange,
            })}
            value={addMonthlyAppliances.dailyUsage}
          >
            <option value="" hidden />

            {[...Array(24)]
              .map((_, idx) => idx + 1)
              .map((hr, idx) => {
                return (
                  <option value={hr} key={idx}>
                    {hr}
                  </option>
                );
              })}
          </select>

          <small className="text-red-500">{errors.dailyUsage?.message}</small>
        </div>

        <div className="flex  flex-col gap-1">
          <label htmlFor="daysInMonth">Days In Month:</label>

          <select
            disabled={!addUserAppliances.dailyUsage}
            className="bg-slate-700 text-white p-2 rounded-md outline-none disabled:bg-slate-900 "
            name="daysInMonth"
            {...register("daysInMonth", {
              onChange: handleOnChange,
            })}
            value={addMonthlyAppliances.daysInMonth}
          >
            <option value="default" hidden />

            {memoizedDaysInMonth.map((num, idx) => {
              return (
                <option value={num} key={idx}>
                  {num}
                </option>
              );
            })}
          </select>
          <small className="text-red-500">{errors.dailyUsage?.message}</small>
        </div>

        <div className="flex  flex-col gap-1">
          <label htmlFor="consumptionPerMonth">
            Total Consumption (kWh/mo)
          </label>

          <input
            disabled={!addUserAppliances.dailyUsage}
            type="text"
            className="bg-slate-700 text-white p-2 rounded-md outline-none disabled:bg-slate-900 "
            name="consumptionPerMonth"
            readOnly
            value={addUserAppliances.consumptionPerMonth}
            {...register("consumptionPerMonth")}
          />

          <small className="text-red-500">
            {errors.consumptionPerMonth?.message}
          </small>
        </div>

        <div className="flex flex-row gap-4 mt-4 justify-between items-center">
          <button
            type="submit"
            className="w-full p-2 rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            Add
          </button>

          <button
            onClick={() => setToggleAdd(false)}
            type="button"
            className="w-full p-2 rounded-md text-white bg-slate-500 hover:bg-slate-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMonthlyAppliances;

AddMonthlyAppliances.propTypes = {
  setToggleAdd: PropTypes.func,
};
