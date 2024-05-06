import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const { VITE_MONTHLY_APPLIANCES_BASE_URL } = import.meta.env;

const MonthlyAppliancesContext = createContext({});

export function MonthlyAppliancesProvider({ children }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [allData, setAllData] = useState({
    count: 0,
    allMonthlyAppliances: [],
    skippedAppliances: [],
  });

  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(5);
  const totalPages = Math.ceil(allData.count / take);

  const pages = [];
  const finalPage = totalPages * take - take;
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
              "Content-type": "application/json",
            },
            method: "POST",
          }
        );

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message ?? result);
        }
        const { count, allMonthlyAppliances, skippedAppliances } = result.data;

        setAllData({
          count: count,
          allMonthlyAppliances: allMonthlyAppliances,
          skippedAppliances: skippedAppliances,
        });
      } catch (error) {
        console.log(error.message ?? error);
      }
    };

    fetchMontlyAppliaces();
  }, [currentDate, skip, take]);

  const onChange = (e) => {
    const { name, value } = e.target;

    setCurrentDate(value);
  };

  return (
    <MonthlyAppliancesContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        skip,
        setSkip,
        take,
        setTake,
        allData,
        setAllData,
        totalPages,
        finalPage,
        pages,
        onChange,
      }}
    >
      {children}
      <Outlet />
    </MonthlyAppliancesContext.Provider>
  );
}

export default MonthlyAppliancesContext;
MonthlyAppliancesProvider.propTypes = {
  children: PropTypes.node,
};
