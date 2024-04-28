import { Icon } from "@iconify/react";
import { useMemo } from "react";
import TableHead from "./TableHead";
import NonEmptyTableRow from "./NonEmptyTableRow";
import EmptyTableRow from "./EmptyTableRow";
import TableFilter from "./TableFilter";
import { useState } from "react";

const MonthlyAppliancesTable = () => {
  
  const [currentDate,setCurrentDate] = useState(new Date())

  const mockData = [
    {
      appliancesName: "Rice Cooker",
      consumptionPerHr: "0.2",
      dailyUsage: 1,
      daysInMonth: 30,
      consumptionPerMonth: 3,
    },
    {
      appliancesName: "TV",
      consumptionPerHr: "0.2",
      dailyUsage: 1,
      daysInMonth: 30,
      consumptionPerMonth: 3,
    },
    {
      appliancesName: "Computer",
      consumptionPerHr: "0.2",
      dailyUsage: 1,
      daysInMonth: 30,
      consumptionPerMonth: 3,
    },
    {
      appliancesName: "Electric Fan",
      consumptionPerHr: "0.2",
      dailyUsage: 1,
      daysInMonth: 30,
      consumptionPerMonth: 3,
    },
    {
      appliancesName: "Refrigerator",
      consumptionPerHr: "0.2",
      dailyUsage: 1,
      daysInMonth: 30,
      consumptionPerMonth: 3,
    },
  ];


  const onChange =(e)=>{
   const {name,value} = e.target
    console.log(name,value)
  }

  return (
    <div className=" w-full p-3 ">
      <TableFilter onChange={onChange} currentDate={currentDate}/>
      <table
        role="table"
        className="bg-slate-900 w-full border-collapse p-4 rounded-md "
      >
        <TableHead />
        <tbody role="rowgroup">
          <NonEmptyTableRow mockData={mockData} />
          <EmptyTableRow mockData={mockData} />
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyAppliancesTable;
