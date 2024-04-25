import TotalCard from "../components/card/TotalCard";
import VerticalBarChart from "../components/chart/VerticalBarChart";

const Tracker = () => {
  return (
    <div className="bg-sky-50 h-dvh-60 w-full grid grid-cols-1  p-2.5 md:bg-pink-400">
      <TotalCard />
      <VerticalBarChart />
    </div>
  );
};

export default Tracker;
