const TotalCard = () => {
  const consumption = [
    {
      title: "Monthly Estimated Consumption",
      totalConsumption: 200,
    },
    {
      title: "Monthly Actual Consumption",
      totalConsumption: 173.66,
    },
  ];

  const bill = [
    {
      title: "Monthly Estimated Bill Expense",
      totalBill: 1500.0,
    },
    {
      title: "Monthly Actual Bill Expense",
      totalBill: 1350.34,
    },
  ];

  return (
    <ul className=" grid grid-cols-1 gap-1.5 w-full max-w-5xl list-none p-2.5 m-0 border border-solid
      md:grid-cols-4
    ">
      {consumption.map((est, idx) => {
        return (
          <li
            key={idx}
            className="h-full flex flex-col justify-center p-2.5 border-l-4 border-purple-600 bg-white"
          >
            <small className="text-purple-600">{est.title} </small>
            <span className="font-bold">{est.totalConsumption} kWh</span>
          </li>
        );
      })}

      {bill.map((act, idx) => {
        return (
          <li
            key={idx}
            className="flex flex-col  justify-center  p-2.5 border-l-4 border-cyan-500   bg-white"
          >
            <small className="text-cyan-500">{act.title} </small>
            <span className="font-bold">{act.totalBill} Php</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TotalCard;
