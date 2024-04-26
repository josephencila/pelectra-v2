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
      name: "Consumption (kWh/month)",
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

  return (
    <div className="grid items-start p-2.5 border border-slate-100">
      <table role="table" className="bg-white border border-slate-100">
        <thead role="rowgroup" className="">
          <tr role="row">
            {headerName.map((h, idx) => {
              return (
                <th
                  key={idx}
                  role="columnHeader"
                  className="border border-slate-100  p-2.5"
                >
                  {h.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody role="rowgroup">
          {mockData.map((m, idx) => {
            return (
              <tr role="row" key={idx}>
                <td role="cell" className="border border-slate-100  p-2.5">
                  {m.appliancesName}
                </td>
                <td role="cell" className="border border-slate-100  p-2.5">
                  {m.consumptionPerHr}
                </td>
                <td role="cell" className="border border-slate-100  p-2.5">
                  {m.dailyUsage}
                </td>
                <td role="cell" className="border border-slate-100  p-2.5">
                  {m.daysInMonth}
                </td>
                <td role="cell" className="border border-slate-100  p-2.5">
                  {m.consumptionPerHr}
                </td>
                <td
                  role="cell"
                  className="border border-slate-100  p-2.5 flex gap-1"
                >
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
      </table>
    </div>
  );
};

export default MonthlyAppliancesTable;
