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

import { useEffect, useMemo, useState } from "react";
import { newData } from "../../helpers/newData";

import useMonthlyAppliances from "../../hooks/useMonthlyAppliances";
import { removeDuplicateDate } from "../../helpers/helper";

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
  const { currentDate, allData } = useMonthlyAppliances();
  const [monthlyAppliancesByYear,setMonthlyAppliancesByYear] = useState([])
  const labels = [
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
  ];

  const val = 0;
  const [defaults, setDefaults] = useState({
    labels: labels,
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
        font: {
          size: 16,
          weight: "normal",
          color: (ChartJS.defaults.color = "white"),
        },
      },

      legend: {
        position: "top",
      },
    },
  };

  const BASE_URL_MONTHLY_APPLIANCES_BY_YEAR =
    "http://localhost:4000/api/v1/montly-appliances/read";

  useEffect(() => {
    const fetchMonthlyAppliancesByYear = async () => {
      try {
        const response = await fetch(
          `${BASE_URL_MONTHLY_APPLIANCES_BY_YEAR}/${currentDate}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
          }
        );
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message ?? result);
        }

        const { monthlyAppliancesByYear } = result.data;
        setMonthlyAppliancesByYear(monthlyAppliancesByYear)
        // console.log("WEEWOO", removeDuplicateDate(byYear(monthlyAppliancesByYear)).map(date => labels[date]));
      } catch (error) {
        console.log(error.message ?? error);
      }
    };
    fetchMonthlyAppliancesByYear();
  }, [currentDate]);

  // console.log(newData[val].consumption.map((est) => est.month));
 
  
  console.log(monthlyAppliancesByYear.map(all=> all.consumptionPerMonth))
  useMemo(() => {
    setDefaults({
      labels: newData[val].consumption.map((est) => est.month) ,
      datasets: [
        {
          label: "Estimated",
          data: 0,
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
      <Bar data={defaults} options={options} className="p-2.5" />
    </div>
  );
};

export default VerticalBarChart;
