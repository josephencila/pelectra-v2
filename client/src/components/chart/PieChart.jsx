import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import useMonthlyAppliances from "../../hooks/useMonthlyAppliances";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
const {allData} = useMonthlyAppliances()

  function getRandomRgb() {
    var num = Math.floor(0xffffff * Math.random()).toFixed();
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return `rgb(${r}, ${g}, ${b},.95)`;
  }



  const [pieData, setPieData] = useState({
    labels: [
      "Refrigerator",
      "Electric Fan",
      "Lights",
      "Computer",
      "Washing Machine",
      "Rice Cooker",
    ].map((data) => data),

    datasets: [
      {
        label: "Consumption(kw)",
        data: [12, 19, 3, 5, 2, 3].map((data) => data),
        backgroundColor: [12, 19, 3, 5, 2, 3].map(() => getRandomRgb()),
        borderColor: "black",
        borderWidth: 0.5,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
      datalabels: {
        display: true,
        color: "black",
        backgroundColor: 'white',
        borderRadius: 50,
        labels: {
          title: {
            font: {
              weight: "bold",
              size: 10
            },
          },
        },
      },

      title: {
        display: true,
        text: "Monthly Appliances Consumption",
        font:{
          size: 16,
          weight: 'normal',
          color: ChartJS.defaults.color = "white"
        }
      },
    },
  };
  return (
    <div className=" bg-slate-800  rounded-md shadow-sm w-[99%] h-[99%]  min-h-xs pl-5 pb-5 pr-5">
      <Pie data={pieData}  options={options}  className=" p-2.5"/>
    </div>
  );
};

export default PieChart;
