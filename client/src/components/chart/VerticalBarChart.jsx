import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { useMemo, useState } from "react";
import { newData } from "../../helpers/newData";

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
  const width = 640;
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

  const memoizeSize = useMemo(() => {
    return width <= 640 ? 10 : 15;
  }, [width]);

  const options = {
    indexAxis: "x",
    responsive: true,

    title: {
      display: true,
      text: "Monthly Consumption Comparison Chart",
    },

    legend: {
      position: "top",
    },

    plugins: {
      datalabels: {
        display: true,
        color: "black",
        align: "end",
        anchor: "end",

        rotation: function (ctx) {
          return memoizeXRotation(ctx);
        },

        labels: {
          title: {
            font: {
              size: memoizeSize,
              weight: "bold",
            },
          },
        },
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

  const memoizeBar = useMemo(() => {
    return width <= 640 ? (
      <Bar data={defaults} height={400} options={options} />
    ) : (
      <Bar data={defaults} options={options} />
    );
  }, []);

  return <div className="flex flex-col p-2.5">
    {memoizeBar}
  </div>;
};

export default VerticalBarChart;
