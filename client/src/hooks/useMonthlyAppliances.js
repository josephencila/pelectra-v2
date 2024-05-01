import { useContext } from "react"
import MonthlyAppliancesContext from "../context/MonthlyAppliancesContext"

const useMonthlyAppliances = () => {
    return useContext(MonthlyAppliancesContext)
}
export default useMonthlyAppliances