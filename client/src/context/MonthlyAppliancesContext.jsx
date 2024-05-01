import { createContext } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
const MonthlyAppliancesContext = createContext({});

export function MonthlyAppliancesProvider({ children }) {
  return (
    <MonthlyAppliancesContext.Provider value={{}}>
      {children}
      <Outlet />
    </MonthlyAppliancesContext.Provider>
  );
}

export default MonthlyAppliancesContext;
MonthlyAppliancesProvider.propTypes = {
  children: PropTypes.node,
};
