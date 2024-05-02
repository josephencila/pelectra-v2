import useMonthlyAppliances from "../../hooks/useMonthlyAppliances";

const NonEmptyTableRow = () => {
  const { allData } = useMonthlyAppliances();

  const tdCell = `
    p-4 text-white
    last:flex last:flex-row last:items-center last:justify-center last:gap-1.5 
    max-md:grid max-md:gap-3 max-md:px-4 max-md:py-3
    max-md:[&:not(:last-child)]:grid-cols-[repeat(2,1fr)]
    max-md:last:grid-cols-[repeat(2,auto)]  
    max-md:first:pt-4
    max-md:last:pb-4
    max-md:before:font-bold 
   `;

  return (
    <>
      {allData.skippedAppliances.map((m, idx) => {
        return (
          <tr
            role="row"
            key={idx}
            className={` bg-slate-800 odd:bg-slate-700  max-md:grid max-md:mb-1 `}
          >
            <td
              role="cell"
              className={`${tdCell} max-md:before:content-['Appliances_Name'] `}
            >
              {m.appliancesName}
            </td>
            <td
              role="cell"
              className={`${tdCell} max-md:before:content-['Consumption_(kWh)'] `}
            >
              {m.consumptionPerHr}
            </td>
            <td
              role="cell"
              className={`${tdCell} max-md:before:content-['Daily_Usage_(hr/s)'] `}
            >
              {m.dailyUsage}
            </td>
            <td
              role="cell"
              className={`${tdCell} max-md:before:content-['Days_In_Month'] `}
            >
              {m.daysInMonth}
            </td>
            <td
              role="cell"
              className={`${tdCell} max-md:before:content-['Consumption_(kWs/mo)'] `}
            >
              {m.consumptionPerMonth}
            </td>
            <td role="cell" className={`${tdCell} `}>
              <button className="pointer text-purple-500 hover:text-purple-400 px-2 ">
                Edit
              </button>
              <button className="pointer text-purple-500 hover:text-purple-400 px-2 ">
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default NonEmptyTableRow;
