import TotalCard from "../components/card/TotalCard";
import CombinedChart from "../components/chart/CombinedChart";

const Tracker = () => {
  return (
    // <div className=" grid grid-cols-[1fr] grid-rows-[auto_repeat(2,1fr)] justify-items-center  h-auto min-h-dvh-60  w-full  p-2.5 bg-sky-200  md:bg-pink-400">

    
    //  <div></div> *

    <div className="bg-sky-50 flex justify-center items-center h-auto">
      <div className=" grid grid-cols-[1fr] md:grid-rows-[auto_repeat(2,1fr)] gap-2 w-full max-w-5xl  min-h-dvh-60 h-auto ">
        <TotalCard />
        <CombinedChart />
        <div className="">d</div>
      </div>
    </div>
  );
};

export default Tracker;
