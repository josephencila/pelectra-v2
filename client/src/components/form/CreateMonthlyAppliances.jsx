import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";
const CreateMonthlyAppliances = ({ setToggleCreate }) => {
  const [allData, setAllData] = useState({
    appliancesName: "",
    wattage: "",
    consumptionPerHr: "",
  });

  const toKwh = (wattage) => {
    if (wattage <= 0) {
      return 0;
    }
    const hour = 1;
    const thou = 1000;
    const kwh = (wattage * hour) / thou;

    return kwh;
  };

  const createAppliances = z.object({
    appliancesName: z
      .string()
      .min(1, { message: "Appliances Name is a required field." })
      .max(50, { message: "Maximum Appliances Name is 50 characters." })
      .superRefine((value, ctx) => {
        const singleSpace = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
        if (!singleSpace.test(value)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "Only alphabetical letters & single space between are allowed.",
          });
        } else {
          return;
        }
      }),
    wattage: z.coerce
      .number({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_type"
              ? " That's not a number."
              : defaultError,
        }),
      })
      .min(1, { message: "Wattage is a required field." })
      .gte(0, { message: "Wattage must be greater than 0." })
      .lte(20000, { message: "Wattage must be less than or equal 20000." }),
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
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    const blockEmoji = /^[a-zA-Z\s&\d&$&+,:;=?@#|'<>.^*()%!-]*$/;
    const val = value;

    if (!blockEmoji.test(value)) {
      return;
    }

    if (name === "wattage") {
      if (isNaN(val)) {
        return;
      }

      setAllData((prevState) => ({
        ...prevState,
        [name]: val,
        ["consumptionPerHr"]: toKwh(val),
      }));
    }

    setAllData((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createAppliances),
    mode: "onChange",
  });

  const create = async() => {
    try {
      const response =  await fetch("http://localhost:4000/api/v1/appliances/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(allData),
      });
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.log(error.message ?? error);
    }
  };

  const onSubmit = () => {
   create()
   setToggleCreate(false)
  };

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 bg-slate-900  flex justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-auto w-full max-w-md  grid grid-cols-1 content-start 
     gap-5 p-5 text-white bg-slate-800  rounded-md shadow-sm "
      >
        <div className=" flex flex-col">
          <span className="font-bold ">Create a new appliances</span>
        </div>
        <div className="flex  flex-col gap-1">
          <label htmlFor="appliancesName">Appliances Name:</label>
          <input
            type="text"
            name="appliancesName"
            placeholder="Television"
            className="bg-slate-700 text-white p-2 rounded-md outline-none "
            value={allData.appliancesName}
            onChange={onChange}
            autoComplete="off"
            {...register("appliancesName", {
              onChange: onChange,
            })}
          />
          <small className="text-red-500">
            {errors.appliancesName?.message}
          </small>
        </div>

        <div className="flex  flex-col gap-1">
          <label htmlFor="wattage">Wattage:</label>
          <input
            type="text"
            name="wattage"
            placeholder="60"
            className="bg-slate-700 text-white p-2 rounded-md outline-none "
            value={allData.wattage}
            onChange={onChange}
            autoComplete="off"
            {...register("wattage", {
              onChange: onChange,
            })}
          />
          <small className="text-red-500">{errors.wattage?.message}</small>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="consumptionPerHr">Consumption (kWh):</label>
          <input
            type="text"
            name="consumptionPerHr"
            placeholder="0.6"
            className="bg-slate-700 text-white p-2 rounded-md outline-none "
            value={allData.consumptionPerHr}
            onChange={onChange}
            autoComplete="off"
            {...register("consumptionPerHr", {
              onChange: onChange,
            })}
          />
          <small className="text-red-500">
            {errors.consumptionPerHr?.message}
          </small>
        </div>

        <div className="flex flex-row gap-4 mt-4 justify-between items-center">
          <button
            type="submit"
            className="w-full p-2 rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            Create
          </button>
          <button
            onClick={() => setToggleCreate(false)}
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

export default CreateMonthlyAppliances;

CreateMonthlyAppliances.propTypes = {
  setToggleCreate: PropTypes.func,
};
