import React, { useMemo } from "react";
import { useTable, TableInstance } from "react-table";


import MOCK_DATA from "./dashboard-table.json";
import { COLUMNS2 } from "./column2";
import "./table.css";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS2, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({
    data : data,
    columns : columns,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  const style = {
    backgroundColor: "#EDF6FF",
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
    color: "#000",
    fontWeight: "400",
  }
  return (
    <table {...getTableProps()}>
      <thead >
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th style={style} {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasicTable;
