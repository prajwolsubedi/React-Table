import React from "react";
import { useTable, Column, useSortBy } from "react-table";
import { useMemo } from "react";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./react-table.json";
import { ColumnType } from "./columns";
import "./table.css";
const SortingTable = () => {
  const data: ColumnType[] = useMemo(() => MOCK_DATA, []);
  const columns: Column<ColumnType>[] = useMemo(() => COLUMNS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ColumnType>({ columns, data }, useSortBy);
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {column.isSorted ? (column.isSortedDesc ? '👇' : '☝️') : ''}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SortingTable;
