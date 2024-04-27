import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { useMemo, useState } from "react";
import { newData } from "../../helpers/newData";
import { useScreenSize } from "../../hooks/useScreenSize";
import PieChart from "./PieChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const VerticalBarChart = () => {
  const { width } = useScreenSize();
  const val = 0;
  const [defaults, setDefaults] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Estimated",
        data: [],
        backgroundColor: "#843BE0",
      },
      {
        label: "Actual",
        data: [],
        backgroundColor: "#00BBE4",
      },
    ],
  });

  const memoizeXRotation = useMemo(() => {
    return (ctx) => (ctx.dataset.data[ctx.dataIndex].x > 42 ? 90 : -70);
  }, []);

  const options = {
    indexAxis: "x",
    responsive: true,
    maintainAspectRatio: false,
   

    plugins: {
      datalabels: {
        display: true,
        color: "white",
        align: "end",
        anchor: "end",

        rotation: function (ctx) {
          return memoizeXRotation(ctx);
        },

        labels: {
          title: {
            font: {
              size: 10,
              weight: "bold",
            },
          },
        },
      },
      title: {
        display: true,
        text: "Monthly Consumption Comparison Chart",
        font:{
          size: 16,
          weight: 'normal',
          color: ChartJS.defaults.color = "white"
        }
      },
  
      legend: {
        position: "top",
      },
    },
  };

  useMemo(() => {
    setDefaults({
      labels: newData[val].consumption.map((est) => est.month),
      datasets: [
        {
          label: "Estimated",
          data: newData[val].consumption.map((est) => est.estimated),
          backgroundColor: "#843BE0",
        },
        {
          label: "Actual",
          data: newData[val].consumption.map((est) => est.actual),
          backgroundColor: "#00BBE4",
        },
      ],
    });
  }, []);

  return (
    <div className="bg-slate-800  rounded-md shadow-sm w-[99%] h-[99%]  min-h-xs ">
      <Bar data={defaults} options={options} className="p-2.5"  />
    </div>
  );
};

export default VerticalBarChart;
