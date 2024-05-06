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
import { labels, removeDuplicateDate } from "../../helpers/helper";

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
  const [monthlyAppliancesByYear, setMonthlyAppliancesByYear] = useState([]);

  const [defaults, setDefaults] = useState({});

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
        setMonthlyAppliancesByYear(monthlyAppliancesByYear);
      } catch (error) {
        console.log(error.message ?? error);
      }
    };
    fetchMonthlyAppliancesByYear();
  }, [currentDate]);

  useMemo(() => {
    const montlhyConsumptionComparison = () => {
      const months = monthlyAppliancesByYear.map((m) => labels[m.month]);
      const consumption = monthlyAppliancesByYear.map((m) => m.consumption);

      let consumptions = [];

      labels.map((item, index) => {
        if (months.includes(item)) {
          const pItems =
            consumption[index] !== undefined
              ? parseFloat(consumption[index])
              : 0;
          consumptions.push(pItems);
        } else {
          consumptions.push(0);
        }
      });

      return consumptions;
    };
    setDefaults({
      labels: labels.map((label) => label),
      datasets: [
        {
          label: "Estimated",
          data: montlhyConsumptionComparison(),
          backgroundColor: "#843BE0",
        },
        {
          label: "Actual",
          data: 0,
          backgroundColor: "#00BBE4",
        },
      ],
    });
  }, [monthlyAppliancesByYear]);

  return (
    <div className="bg-slate-800  rounded-md shadow-sm w-[99%] h-[99%]  min-h-xs ">
      <Bar data={defaults} options={options} className="p-2.5" />
    </div>
  );
};

export default VerticalBarChart;
