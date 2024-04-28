const TableHead = () => {
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
  return (
    <thead role="rowgroup">
      <tr role="row" className="bg-slate-800">
        {headerName.map((hn, idx) => {
          return (
            <th
              role="columnheader"
              className="p-4 text-left text-white max-md:hidden"
              key={idx}
            >
              {hn.name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
