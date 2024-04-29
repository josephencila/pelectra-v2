import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TableFilter = ({ onChange, currentDate }) => {
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

        <button className="px-2">
          <span className="text-purple-400"> Add</span>
        </button>
        <button className=" px-2">
          <span className="text-purple-400"> Create</span>
        </button>
      </div>
    </div>
  );
};

export default TableFilter;

TableFilter.propTypes = {
  onChange: PropTypes.func,
  currentDate: PropTypes.string,
};
