import { ColumnDef } from "@tanstack/react-table";

export type BasicTableColumnType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    age: number;
    country: string;
    date: string;
  };

  
export const COLUMNS : ColumnDef<BasicTableColumnType>[] = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "First Name",
      accessorKey: "first_name",
      footer: "First Name",
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Age",
      accessorKey: "age",
      footer: "Age",
    },
    {
      header: "Country",
      accessorKey: "country",
      footer: "Country",
    },
    {
      header: "Date",
      accessorKey: "date",
      footer: "Date",
    },
  ];