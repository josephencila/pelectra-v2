
import TableFilter from "./TableFilter";
import TableHead from "./TableHead";
import NonEmptyTableRow from "./NonEmptyTableRow";
import EmptyTableRow from "./EmptyTableRow";
import TablePagination from "./TablePagination";

const MonthlyAppliancesTable = () => {
  return (
    <div className=" w-full p-3 ">
      <TableFilter />
      <table
        role="table"
        className="bg-slate-900 w-full border-collapse p-4 rounded-md "
      >
        <TableHead />
        <tbody role="rowgroup">
          <NonEmptyTableRow />
          <EmptyTableRow />
        </tbody>
      </table>
      <TablePagination />
    </div>
  );
};

export default MonthlyAppliancesTable;
