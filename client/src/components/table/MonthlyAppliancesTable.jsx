import { Icon } from "@iconify/react";

const MonthlyAppliancesTable = () => {
  const headerName = [
    {
      name: "Appliances Name",
    },
    {
      name: "Consumption (kWh)",
    },
    {
      name: "Daily Usage (hr/s)",
    },
    {
      name: "Days In Month",
    },
    {
      name: "Consumption (kWh/mo)",
    },
    {
      name: "Action",
    },
  ];

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


  const tdCell = `
   p-4 text-white
   last:flex last:flex-row last:items-center last:justify-end last:gap-1.5 
   max-md:grid max-md:gap-3 max-md:px-4 max-md:py-3
   max-md:[&:not(:last-child)]:grid-cols-[21ch_auto]
   max-md:last:grid-cols-[repeat(2,auto)]  
   max-md:first:pt-4
   max-md:last:pb-4
   max-md:before:font-bold 
  `

  return (
    <div className=" w-full p-3 ">
     <table role="table" className="bg-slate-900 w-full border-collapse p-4 rounded-md "> 
      <caption className="p-4 text-left bg-slate-800  text-white max-md:rounded-md max-md:mb-1">Monthly Appliances</caption>
        <thead role="rowgroup">
          <tr role="row" className="bg-slate-800" >
          {
            headerName.map((hn,idx)=>{
              return <th role="columnheader" className=" p-4 text-left text-white max-md:hidden" key={idx}>
                {hn.name}
                </th>
            })
          }
          </tr>
        </thead>
        <tbody role="rowgroup" >
                {
                  mockData.map((m, idx) => {
                    return <tr role="row" key={idx} className=" bg-slate-800 odd:bg-slate-700  max-md:grid max-md:mb-1 ">
                      <td role="cell" className={` ${tdCell} max-md:before:content-['Appliances_Name'] `}>{m.appliancesName}</td>
                      <td role="cell" className={` ${tdCell} max-md:before:content-['Consumption_(kWh)'] `}>{m.consumptionPerHr}</td>
                      <td role="cell" className={` ${tdCell} max-md:before:content-['Daily_Usage_(hr/s)'] `}>{m.dailyUsage}</td>
                      <td role="cell" className={` ${tdCell} max-md:before:content-['Days_In_Month'] `}>{m.daysInMonth}</td>
                      <td role="cell" className={` ${tdCell} max-md:before:content-['Consumption_(kWs/mo)'] `}>{m.consumptionPerMonth}</td>
                      <td role="cell" className={` ${tdCell} `}>
                        <button className="pointer text-purple-500 hover:text-purple-400 px-2 ">edit</button>
                        <button className="pointer text-purple-500 hover:text-purple-400 px-2 ">delete</button>
                      </td>
                    </tr>
                  })
                }
        </tbody> 
      </table>
    </div>
  );
};

export default MonthlyAppliancesTable;
