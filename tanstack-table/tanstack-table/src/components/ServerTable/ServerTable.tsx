import React from "react";
import {
  ColumnDef,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import "../BasicTable/table.css";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { BasicTableColumnType } from "../BasicTable/Columns";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
type ServerTable = {
  data: BasicTableColumnType[];
  columns: ColumnDef<BasicTableColumnType>[];
};

// function Filter({
//   column,
//   table,
// }: {
//   column: Column<any, any>;
//   table: ReactTable<any>;
// }) {
//   const firstValue = table
//     .getPreFilteredRowModel()
//     .flatRows[0]?.getValue(column.id);

//   const columnFilterValue = column.getFilterValue();

//   return typeof firstValue === "number" ? (
//     <div className="flex space-x-2">
//       <input
//         type="number"
//         value={(columnFilterValue as [number, number])?.[0] ?? ""}
//         onChange={(e) =>
//           column.setFilterValue((old: [number, number]) => [
//             e.target.value,
//             old?.[1],
//           ])
//         }
//         placeholder={`Min`}
//         className="w-24 border shadow rounded"
//       />
//       <input
//         type="number"
//         value={(columnFilterValue as [number, number])?.[1] ?? ""}
//         onChange={(e) =>
//           column.setFilterValue((old: [number, number]) => [
//             old?.[0],
//             e.target.value,
//           ])
//         }
//         placeholder={`Max`}
//         className="w-24 border shadow rounded"
//       />
//     </div>
//   ) : (
//     <input
//       type="text"
//       value={(columnFilterValue ?? "") as string}
//       onChange={(e) => column.setFilterValue(e.target.value)}
//       placeholder={`Search...`}
//       className="w-36 border shadow rounded"
//     />
//   );
// }

const ServerTable = ({ data, columns }: ServerTable) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    pageCount: 72,
    initialState: {
      pagination: {
        pageSize: 13,
      },
    },
  });

  const [myPageIndex, setMyPageIndex] = React.useState(0);

  const pageIndex = table.options.state.pagination?.pageIndex;

  const handleChange = (e) => {
    // console.log(e.target.value)
    setMyPageIndex(e.target.value);
  };

  const handlePageChange = () => {
    console.log(myPageIndex);
    table.setPageIndex(myPageIndex as number);
  };

  const maxTableIndex = table.getPageCount() - 1;
  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th colSpan={header.colSpan} key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
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
      <Divider />
      <div>
        <Grid
          width="500px"
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginX: "auto",
          }}
        >
          <Button
            color="secondary"
            onClick={() => {
              table.setPageIndex(0);
              const result = table.getState().pagination.pageIndex;
              console.log(result);
            }}
            disabled={table.options.state.pagination?.pageIndex === 0}
          >
            {"<<"}
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              table.previousPage();
            }}
            disabled={table.options.state.pagination?.pageIndex === 0}
          >
            Previous Page
          </Button>
          <TextField
            onChange={(e) => table.setPageIndex(Number(e.target.value))}
            size="small"
            sx={{ width: "50px" }}
            label={Number(table.options.state.pagination?.pageIndex)}
          >
            {" "}
          </TextField>
          <Button onClick={handlePageChange}>Submit</Button>
          {/* <Typography>
            {Number(table.options.state.pagination?.pageIndex) + 1}
          </Typography> */}
          <Button
            onClick={() => {
              table.nextPage();
            }}
            disabled={
              table.options.state.pagination?.pageIndex === maxTableIndex
            }
          >
            Next Page
          </Button>
          <Button
            onClick={() => {
              table.setPageIndex(table.getPageCount() - 1);
            }}
            disabled={
              table.options.state.pagination?.pageIndex === maxTableIndex
            }
          >
            {">>"}
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default ServerTable;
