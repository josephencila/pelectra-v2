import TotalCard from "../components/card/TotalCard";
import CombinedChart from "../components/chart/CombinedChart";
import MonthlyAppliancesTable from "../components/table/MonthlyAppliancesTable";

const Tracker = () => {
  return (
    <div className="bg-slate-50 flex justify-center items-center h-auto">
      <div className=" grid grid-cols-[1fr] md:grid-rows-[auto_.5fr_1fr] gap-2 w-full max-w-5xl  min-h-dvh-60 h-auto ">
        <TotalCard />
        <CombinedChart />
        <MonthlyAppliancesTable />
      </div>
    </div>
  );
};

export default Tracker;
