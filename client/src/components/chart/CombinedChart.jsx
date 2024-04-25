import PieChart from "./PieChart";
import VerticalBarChart from "./VerticalBarChart";

const CombinedChart = () => {
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[repeat(2,1fr)] gap-2.5 p-2.5">
      <VerticalBarChart />
      <PieChart />
    </div>
  );
};

export default CombinedChart;
