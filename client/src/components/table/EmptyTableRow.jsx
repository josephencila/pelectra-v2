import PropTypes from "prop-types";
import { useMemo } from "react";

const EmptyTableRow = ({ mockData }) => {

    const memoizeTable = useMemo(() => {
        return mockData.length > 0 ? "hidden max-md:hidden" : "";
      }, [mockData]);

      
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
EmptyTableRow.propTypes = {
    mockData: PropTypes.array,
};
