import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { BasicTableColumnType } from "./Columns";
import mdata from "../../MOCK_DATA.json";
import "./table.css";
import TableChip from "../TableChip";
// type BasicTableProps<TData, TValue> = {
//   data: TData[];
//   columns: ColumnDef<TData, TValue>[];
// };

const columnHelper = createColumnHelper<BasicTableColumnType>();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    footer: "id",
  }),
  columnHelper.accessor("first_name", {
    header: "First Name",
    footer: "first name",
    cell: (props) => <span>{props.getValue().toUpperCase()}</span>,
  }),
  columnHelper.accessor("last_name", {
    header: "Last Name",
    footer: "last name",
  }),
  columnHelper.accessor("age", {
    header: "Age",
    footer: "age",
    cell: (props) => {
      // console.log(props.getValue())
      return <span>{`${props.getValue() - props.row.original.id}`}</span>;
    },
  }),
  columnHelper.accessor("country", {
    header: "Country",
    footer: "country",
  }),
  columnHelper.accessor("date", {
    header: "Date",
    footer: "date",
  }),
  columnHelper.accessor("email", {
    header: "Email",
    footer: "email",
  }),
  columnHelper.accessor("task", {
    header: "Task",
    footer: "task",
    cell: (props) => {
      return <TableChip props={props} />;
    },
  }),
];

const defaultData: BasicTableColumnType[] = [
  {
    id: 1,
    first_name: "Emalia",
    last_name: "Ferencowicz",
    email: "eferencowicz0@behance.net",
    age: 20,
    country: "Mozambique",
    date: "11/7/2022",
    task: "",
  },
  {
    id: 2,
    first_name: "Ellerey",
    last_name: "Stobbs",
    email: "estobbs1@domainmarket.com",
    age: 84,
    country: "Philippines",
    date: "8/29/2022",
    task: "",
  },
  {
    id: 3,
    first_name: "Jozef",
    last_name: "De Cristoforo",
    email: "jdecristoforo2@phpbb.com",
    age: 33,
    country: "Cyprus",
    date: "3/5/2023",
    task: "",
  },
  {
    id: 4,
    first_name: "Bernice",
    last_name: "Empleton",
    email: "bempleton3@reddit.com",
    age: 62,
    country: "Republic of the Congo",
    date: "7/13/2023",
    task: "",
  },
  {
    id: 5,
    first_name: "Laney",
    last_name: "Hendron",
    email: "lhendron4@myspace.com",
    age: 70,
    country: "China",
    date: "4/28/2023",
    task: "",
  },
  {
    id: 6,
    first_name: "Henri",
    last_name: "Tothe",
    email: "htothe5@nifty.com",
    age: 97,
    country: "Poland",
    date: "12/9/2022",
    task: "",
  },
  {
    id: 7,
    first_name: "Enoch",
    last_name: "Besson",
    email: "ebesson6@mayoclinic.com",
    age: 48,
    country: "Peru",
    date: "6/13/2023",
    task: "",
  },
];

/*
    "id": 1,
    "first_name": "Emalia",
    "last_name": "Ferencowicz",
    "email": "eferencowicz0@behance.net",
    "age": 20,
    "country": "Mozambique",
    "date": "11/7/2022"



    export const BasicTable = <TData, TValue>({
      columns,
      data,
    }: BasicTableProps<TData, TValue>) => {
      const Table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      });
  */
const BasicTable = () => {
  const [data, setData] = React.useState(() => [...defaultData]);
  // console.log(data, setData)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th colSpan={header.colSpan} key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.footer,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      {/* <TableChip /> */}
    </div>
  );
};

export default BasicTable;
