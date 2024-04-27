const TotalCard = () => {
  const consumption = [
    {
      title: "Monthly Estimated Consumption",
      totalConsumption: 200,
    },
    {
      title: "Monthly Estimated Bill Expense ",
      totalConsumption: 173.66,
    },
  ];

  const bill = [
    {
      title: "Monthly Actual Consumption",
      totalBill: 1500.0,
    },
    {
      title: "Monthly Actual Bill Expense",
      totalBill: 1350.34,
    },
  ];

  return (
    <ul className=" grid grid-cols-1 gap-1.5 w-full max-w-5xl list-none p-2.5 m-0 
      md:grid-cols-4
    ">
      {consumption.map((est, idx) => {
        return (
          <li
            key={idx}
            className="h-full flex flex-col justify-center p-2.5 border-l-4 border-purple-600 bg-slate-800"
          >
            <small className="text-white">{est.title} </small>
            <span className="font-bold text-white">{est.totalConsumption} kWh</span>
          </li>
        );
      })}

      {bill.map((act, idx) => {
        return (
          <li
            key={idx}
            className="flex flex-col  justify-center  p-2.5 border-l-4 border-cyan-500   bg-slate-800"
          >
            <small className="text-white ">{act.title} </small>
            <span className="font-bold text-white">{act.totalBill} Php</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TotalCard;
