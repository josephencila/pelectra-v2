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
      name: "Consumption (month)",
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

  const tdCell = `bg-white block  relative p-2 pl-[50%] text-sm  before:p-2 before:font-bold  before:absolute before:top-0 before:left-2 before:w-[45%] before:pr-3 before:whitespace-nowrap  md:table-cell md:pl-1  md:before:content-none`

  return (
    <div className="grid grid-cols-[1fr] grid-rows-[60px,1fr] items-start p-2.5">
      <div className="flex justify-center items-center p-2.5 h-60px  ">
         <span className="text-xs font-bold text-slate-600">Monthly Appliances</span>
      </div>
      <table role="table" className="block  min-h-xs md:table md:text-left">
  <thead role="rowgroup" className="block md:table-header-group ">
    <tr role="row" className="block mb-4 absolute top-[-9999px] left-[-9999px] md:top-[unset] md:left-[unset] md:[position:unset] md:table-row   ">
    {
      headerName.map((hn,idx)=>{
        return <th role="columnheader" key={idx} className="block md:table-cell border border-slate-100 md:p-4 ">{hn.name}</th>
      })
    }
    </tr>
  </thead>
  <tbody role="rowgroup" className="block md:table-row-group ">
          {
            mockData.map((m, idx) => {
              return <tr role="row" className="block shadow-sm md:shadow-none  md:table-row mb-4 hover:bg-blue-200 rounded-sm border border-slate-100 " key={idx}>
                <td role="cell" className={`${tdCell} before:content-['Appliances_Name'] `}>Matman</td>
                <td role="cell" className={`${tdCell} before:content-['Consumption_(kWh)'] `}>Matman</td>
                <td role="cell" className={`${tdCell} before:content-['Daily_Usage_(hr/s)'] `}>Chief Sandwich Eater</td>
                <td role="cell" className={`${tdCell} before:content-['Days_In_Month'] `}>Lettuce Green</td>
                <td role="cell" className={`${tdCell} before:content-['Consumption_(kWs/mo)'] `}>Trek</td>
                <td role="cell" className={`${tdCell} before:content-['Action']  md:text-center`}>
                <button>
                    <Icon icon="material-symbols:edit-outline" className="hover:text-blue-500 mx-1" />
                  </button>
                  <button>
                    <Icon icon="mdi:trash-can-outline"  className="hover:text-blue-500 mx-1"/>
                  </button>
                </td>
              </tr>
            })
          }
   
  </tbody>
</table>
      {/* <table className="bg-white border border-slate-100 rounded-md shadow-sm">
        <thead>
          <tr role="row" className="block ">
            {headerName.map((h, idx) => {
              return (
                <th
                  key={idx}
                  role="columnHeader" className="block "
                  className="bg-slate-100   border border-slate-200  p-2.5"
                >
                  {h.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody> */}
          {/* <tr className="text-center h-xs">
            <td colSpan="100%" className="text-blue-500">No Records.</td>
          </tr> */}
          {/* {mockData.map((m, idx) => {
            return (
              <tr key={idx}>
                <td className="  p-2.5">{m.appliancesName}</td>
                <td className="  p-2.5">{m.consumptionPerHr}</td>
                <td className="  p-2.5">{m.dailyUsage}</td>
                <td className="  p-2.5">{m.daysInMonth}</td>
                <td className="  p-2.5">{m.consumptionPerHr}</td>
                <td className="border border-slate-100  p-2.5 flex gap-1">
                  <button>
                    <Icon icon="material-symbols:edit-outline" />
                  </button>
                  <button>
                    <Icon icon="mdi:trash-can-outline" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
};

export default MonthlyAppliancesTable;
