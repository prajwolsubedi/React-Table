import { createColumnHelper } from "@tanstack/react-table";
import { BasicTableColumnType } from "../BasicTable/Columns";
const columnHelper = createColumnHelper<BasicTableColumnType>();
import TableChip from "../TableChip";
export const COLUMNS = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("first_name", {
    header: "FIRST NAME",
  }),
  columnHelper.accessor("last_name", {
    header: "LAST NAME",
  }),
  columnHelper.accessor("age", {
    header: "AGE",
  }),
  columnHelper.accessor("country", {
    header: "COUNTRY",
  }),
  columnHelper.accessor("date", {
    header: "DATE",
  }),
  columnHelper.accessor("email", {
    header: "EMAIL",
  }),
  columnHelper.display({
    header: "STATUS",
    id: "Chip",
    cell: (props) => <TableChip props={props} />,
  }),
];
