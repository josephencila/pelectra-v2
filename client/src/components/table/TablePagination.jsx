import { useEffect, useState } from "react";
const BASE_URL = `http://localhost:4000/api/v1/montly-appliances/read`;
const DATE_RANGE = "1995-04-22 15:26:05.17+08";

const TablePagination = () => {
  const [allData, setAllData] = useState({
    count: 0,
    appliances: [],
  });
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(5);
  const totalPages = Math.ceil(allData.count / take);
  useEffect(() => {
    const fetchMontlyAppliaces = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/${skip}/${take}/${DATE_RANGE}`,
          {
            headers: {
              Accept: "application/json",
              "Content-type": "application/json;charset=utf-8",
            },
            method: "POST",
          }
        );

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message ?? result);
        }
        const { count, appliances } = result.data;

        setAllData({
          count: count,
          appliances: appliances,
        });
      } catch (error) {
        console.log(error.message ?? error);
      }
    };

    fetchMontlyAppliaces();
  }, [skip, take]);

  const pages = [];

  for (let i = 0; i <= totalPages - 1; i++) {
    pages.push(i * take);
  }

  const prevPage = () => {
    if (skip === 0) {
      return null;
    }

    setSkip((prev) => prev - take);
  };
  const nextPage = () => {
    if (skip === take) {
      return null;
    }

    setSkip((prev) => prev + take);
  };

  return (
    <div className="h-60px w-full bg-slate-400 grid grid-cols-[repeat(2,1fr)]">
      <div className="border border-black">
        <button onClick={prevPage}>prev</button>
        {pages.map((page, idx) => {
          return (
            <button
              key={idx}
              className={page === skip ? "bg-green-500" : "bg-slate-500"}
              onClick={() => setSkip(page)}
            >
              {idx + 1}
            </button>
          );
        })}
        <button onClick={nextPage}>next</button>
      </div>
      <div className="border border-black flex flex-row gap-4">
        <span className="font-bold">SKIP: {skip}</span>
        <span className="font-bold">
          LIMIT: {allData.count} {Math.ceil(allData.count / take)}
        </span>
        {allData.appliances.map((all, idx) => {
          return <span key={idx}>{all.appliancesName}</span>;
        })}
      </div>
    </div>
  );
};

export default TablePagination;
