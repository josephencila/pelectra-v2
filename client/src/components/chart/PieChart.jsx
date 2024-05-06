import { useMemo, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import useMonthlyAppliances from "../../hooks/useMonthlyAppliances";
import { getRandomRgb, removeDuplicateDate, roundTo3Decimals } from "../../helpers/helper";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { allData } = useMonthlyAppliances();

  const [pieData, setPieData] = useState();



 

  useMemo(() => {
    const appliancesNames = allData.allMonthlyAppliances.map(all=> all.appliancesName)
    const noDuplicatesAppliancesNames = removeDuplicateDate(appliancesNames)
    
  
    const perMonth = allData.allMonthlyAppliances.reduce((all, {appliancesName: a, consumptionPerMonth: c}) => {
      all[a] = (all[a] || 0) + parseFloat(c);
      return all;
  }, {});


    setPieData({
      labels: noDuplicatesAppliancesNames.map((a) => a),
      datasets: [
        {
          label: "Consumption(kw)",
          data:Object.values(perMonth).map(a => roundTo3Decimals(a,3)),
          backgroundColor: noDuplicatesAppliancesNames.map(() => getRandomRgb()),
          borderColor: "black",
          borderWidth: 0.5,
        },
      ],
    });
  }, [allData]);

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
        backgroundColor: "white",
        borderRadius: 50,
        labels: {
          title: {
            font: {
              weight: "bold",
              size: 10,
            },
          },
        },
      },

      title: {
        display: true,
        text: "Monthly Appliances Consumption",
        font: {
          size: 16,
          weight: "normal",
          color: (ChartJS.defaults.color = "white"),
        },
      },
    },
  };
  return (
    <div className=" bg-slate-800  rounded-md shadow-sm w-[99%] h-[99%]  min-h-xs pl-5 pb-5 pr-5">
      <Pie data={pieData} options={options} className=" p-2.5" />
    </div>
  );
};

export default PieChart;
