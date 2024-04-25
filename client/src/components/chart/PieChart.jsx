import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  function getRandomRgb() {
    var num = Math.floor(0xffffff * Math.random()).toFixed();
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return `rgb(${r}, ${g}, ${b},0.5)`;
  }

  const appliances = [
    {
      appliances: "Refrigerator",
      consumption: 0.2,
      start_At: "",
      end_At: "",
      totalDuration: 12,
      totalConsumption: 2.4,
      created_At: Date.now(),
      updated_At: Date.now(),
    },
  ];
  // var d1 = Date.parse("6:30 am");
  // var d2 = Date.parse("11:00 pm");

  // var diff = new TimeSpan(d2 - d1);

  // console.log("Hours: ", diff.hours);
  // console.log("Minutes: ", diff.minutes);

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
    plugins: {
      legend: {
        position: "right",
      },
      datalabels: {
        display: true,
        color: "black",
        labels: {
          title: {
            font: {
              weight: "bold",
            },
          },
        },
      },

      title: {
        display: true,
        text: "Monthly Appliances Consumption",
      },
    },
  };
  return (
    <div className="relative h-ss w-full">
      <Pie data={pieData} options={options} />
    </div>
  );
};

export default PieChart;
