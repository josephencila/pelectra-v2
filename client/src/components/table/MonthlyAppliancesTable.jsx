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
 
  return (
    <div className="grid  p-2.5 border border-solid">
      <table role="table" className="border border-solid">
        <thead role="rowgroup">
          <tr role="row">
            {headerName.map((h, idx) => {
              return (
                <th
                  key={idx}
                  role="columnHeader"
                  className="border border-black"
                >
                  {h.name}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody role="rowgroup">
          <tr role="row">
            <td role="cell">James</td>
            <td role="cell">Matman</td>
            <td role="cell">Chief Sandwich Eater</td>
            <td role="cell">Lettuce Green</td>
            <td role="cell">Trek</td>
           
          </tr>
          <tr role="row">
            <td role="cell">The</td>
            <td role="cell">Tick</td>
            <td role="cell">Crimefighter Sorta</td>
            <td role="cell">Blue</td>
            <td role="cell">Wars</td>
           
          </tr>
          <tr role="row">
            <td role="cell">Jokey</td>
            <td role="cell">Smurf</td>
            <td role="cell">Giving Exploding Presents</td>
            <td role="cell">Smurflow</td>
            <td role="cell">Smurf</td>
           
          </tr>
          <tr role="row">
            <td role="cell">Cindy</td>
            <td role="cell">Beyler</td>
            <td role="cell">Sales Representative</td>
            <td role="cell">Red</td>
            <td role="cell">Wars</td>
           
          </tr>
          <tr role="row">
            <td role="cell">Captain</td>
            <td role="cell">Cool</td>
            <td role="cell">Tree Crusher</td>
            <td role="cell">Blue</td>
            <td role="cell">Wars</td>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyAppliancesTable;
