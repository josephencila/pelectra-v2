import { roundTo3Decimals } from "../../helpers/helper";
import useMonthlyAppliances from "../../hooks/useMonthlyAppliances";

const TotalCard = () => {
  const { allData } = useMonthlyAppliances();
  const rate = 10.9518

  const calculateExpense = ()=>{
    const estimated = allData.totalConsumption * rate
    return roundTo3Decimals(estimated,2)
  }
  return (
    <ul
      className=" grid grid-cols-1 gap-1.5 w-full max-w-5xl list-none p-2.5 m-0 
      md:grid-cols-4
    "
    >
      <li className="h-full flex flex-col justify-center p-2.5 border-l-4 border-purple-600 bg-slate-800">
        <small className="text-white">Monthly Estimated Consumption </small>
        <span className="font-bold text-white">{allData.totalConsumption} kWh</span>
      </li>
      <li className="h-full flex flex-col justify-center p-2.5 border-l-4 border-purple-600 bg-slate-800">
        <small className="text-white">Monthly Estimated Expense </small>
        <span className="font-bold text-white">{calculateExpense()} kWh</span>
      </li>
      <li className="flex flex-col  justify-center  p-2.5 border-l-4 border-cyan-500   bg-slate-800">
        <small className="text-white ">Monthly Actual Consumption</small>
        <span className="font-bold text-white">{0} Php</span>
      </li>
      <li className="flex flex-col  justify-center  p-2.5 border-l-4 border-cyan-500   bg-slate-800">
        <small className="text-white ">Monthly Actual Expense </small>
        <span className="font-bold text-white">{0} Php</span>
      </li>
    </ul>
  );
};

export default TotalCard;
