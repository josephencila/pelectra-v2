import { Icon } from "@iconify/react";
import { useEffect, useMemo } from "react";
import TableHead from "./TableHead";
import NonEmptyTableRow from "./NonEmptyTableRow";
import EmptyTableRow from "./EmptyTableRow";
import TableFilter from "./TableFilter";
import { useState } from "react";
import TablePagination from "./TablePagination";
const {
  VITE_MONTHLY_APPLIANCES_BASE_URL
} = import.meta.env

const MonthlyAppliancesTable = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [allData, setAllData] = useState({
    count: 0,
    appliances: [],
  });
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(5);
  const totalPages = Math.ceil(allData.count / take);

  const pages = [];
  const finalPage = (totalPages * take) - take
  for (let i = 0; i <= totalPages - 1; i++) {
    pages.push(i * take);
  }

  useEffect(() => {
    const fetchMontlyAppliaces = async () => {
      try {
        const response = await fetch(
          `${VITE_MONTHLY_APPLIANCES_BASE_URL}/${skip}/${take}/${currentDate}`,
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
  }, [currentDate, skip, take]);

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    setCurrentDate(value);
  };

  return (
    <div className=" w-full p-3 ">
      <TableFilter onChange={onChange} currentDate={currentDate} />
      <table
        role="table"
        className="bg-slate-900 w-full border-collapse p-4 rounded-md "
      >
        <TableHead />
        <tbody role="rowgroup">
          <NonEmptyTableRow mockData={allData.appliances} />
          <EmptyTableRow mockData={allData.appliances} />
        </tbody>
      </table>
      <TablePagination
        skip={skip}
        setSkip={setSkip}
        take={take}
        totalPages={totalPages}
        pages={pages}
        finalPage={finalPage}
      />
    </div>
  );
};

export default MonthlyAppliancesTable;
