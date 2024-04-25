import TotalCard from "../components/card/TotalCard";
import VerticalBarChart from "../components/chart/VerticalBarChart";

const Tracker = () => {
  return (
    <div className="grid grid-cols-1 bg-sky-50 h-dvh-60 w-full  p-2.5 md:bg-pink-400">
      <TotalCard />
      <VerticalBarChart />
      <div></div>
    </div>
  );
};

export default Tracker;
