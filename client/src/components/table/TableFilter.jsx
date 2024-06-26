import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useMonthlyAppliances from "../../hooks/useMonthlyAppliances";
import { useMemo, useState } from "react";
import CreateMonthlyAppliances from "../form/CreateMonthlyAppliances";
import AddMonthlyAppliances from "../form/AddMonthlyAppliances";

const TableFilter = () => {
  const { currentDate, onChange } = useMonthlyAppliances();
  const [toggleCreate, setToggleCreate] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(true);

  const memoizedCreate = useMemo(() => {
    return toggleCreate ? (
      <CreateMonthlyAppliances setToggleCreate={setToggleCreate} />
    ) : (
      <></>
    );
  }, [toggleCreate]);

  const memoizedAdd = useMemo(() => {
    return toggleAdd ? (
      <AddMonthlyAppliances setToggleAdd={setToggleAdd} />
    ) : (
      <></>
    );
  }, [toggleAdd]);

  return (
    <div className="w-full h-60px grid grid-cols-[repeat(2,1fr)]  max-md:grid-cols-[1fr] max-md:h-auto bg-slate-700 max-md:bg-slate-800 ">
      <div className="w-full h-60px flex items-center max-md:justify-center ">
        <span className="text-white px-2.5">Montly Appliances</span>
      </div>
      <div className="flex flex-row max-md:justify-center  items-center justify-end p-2.5">
        <DatePicker
          className=" bg-slate-700  text-center max-md:bg-slate-800  p-0 m-0  text-purple-400 outline-none border border-purple-400 cursor-pointer"
          calendarClassName="bg-slate-700 top-0 text-cyan-600"
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          selected={currentDate}
          minDate={new Date("1995-04-23T09:36:34.597Z")}
          maxDate={new Date(Date.now())}
          onChange={(value) =>
            onChange({ target: { value: value, name: "datepicker" } })
          }
          placeholderText="Select date"
        />

        <button
            onClick={() => setToggleAdd(true)}
        type="button" className="px-2">
          <span className="text-purple-400">Add</span>
        </button>
        <button
          onClick={() => setToggleCreate(true)}
          type="button"
          className=" px-2"
        >
          <span className="text-purple-400">Create</span>
        </button>
      </div>
      {memoizedAdd}
      {memoizedCreate}
    </div>
  );
};

export default TableFilter;
