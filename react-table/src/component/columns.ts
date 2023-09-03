import { Column } from "react-table";

export type ColumnType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  country: string;
};

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
    Footer: "ID",
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "First Name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
  },
  {
    Header: "Email",
    accessor: "email",
    Footer: "Email",
  },
  {
    Header: "Age",
    accessor: "age",
    Footer: "Age",
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
  },
  {
    Header: "Date",
    accessor: "date",
    Footer: "Date",
  },
] as Column<ColumnType>[];

export const GROUPED_COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
    Footer: "ID",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
        Footer: "First Name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer: "Last Name",
      }
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        accessor: "email",
        Footer: "Email",
      },
      {
        Header: "Age",
        accessor: "age",
        Footer: "Age",
      },
      {
        Header: "Country",
        accessor: "country",
        Footer: "Country",
      },
      {
        Header: "Date",
        accessor: "date",
        Footer: "Date",
      },
    ],
  },
] as Column<ColumnType>[];
