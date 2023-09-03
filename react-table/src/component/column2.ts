import { Column } from "react-table";

type ColumnType = {
  actions: string;
  meeting_title: string;
  created_by: string;
  status: string;
};

export const COLUMNS2 = [
  {
    Header: "Actions",
    accessor: "actions",
  },
  {
    Header: "Meeting Title",
    accessor: "meeting_title",
  },
  {
    Header: "Created by",
    accessor: "created_by",
  },
  {
    Header: "Status",
    accessor: "status",
  },
] as Column<ColumnType>[];
