import { useMemo } from "react";
import useMonthlyAppliances from "../../hooks/useMonthlyAppliances";

const EmptyTableRow = () => {
  const { allData } = useMonthlyAppliances();

  const memoizeTable = useMemo(() => {
    return allData.skippedAppliances.length > 0 ? "hidden max-md:hidden" : "";
  }, [allData.skippedAppliances]);

  return (
    <tr
      role="row"
      className={`${memoizeTable} bg-slate-800 odd:bg-slate-700  max-md:grid max-md:mb-1`}
    >
      <td
        role="cell"
        colSpan={6}
        className="text-white h-xs text-center max-md:flex max-md:justify-center max-md:items-center"
      >
        No Records.
      </td>
    </tr>
  );
};

export default EmptyTableRow;
