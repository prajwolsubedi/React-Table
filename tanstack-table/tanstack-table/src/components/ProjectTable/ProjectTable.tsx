import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import "../BasicTable/table.css";
import TableChip from "../TableChip";
export type ProjectTableDataTypes = {
  id: number;
  name: string;
  date: string;
  status: "Ongoing" | "Completed";
  info: {
    ReceiverName: string;
    ReceiverEmail: string;
  };
};

const data: ProjectTableDataTypes[] = [
  {
    id: 1,
    name: "Prajwol",
    date: "2022/5/5",
    status: "Completed",
    info: {
      ReceiverName: "Sahin",
      ReceiverEmail: "lale@gmail.com",
    },
  },
  {
    id: 2,
    name: "Srijan",
    date: "2023/7/15",
    status: "Completed",
    info: {
      ReceiverName: "Prakash",
      ReceiverEmail: "Srijan@gmail.com",
    },
  },
  {
    id: 3,
    name: "Bipul",
    date: "2024/7/15",
    status: "Ongoing",
    info: {
      ReceiverName: "Jhuse",
      ReceiverEmail: "Bipul@gmail.com",
    },
  },
  {
    id: 4,
    name: "Ranish",
    date: "2024/7/15",
    status: "Ongoing",
    info: {
      ReceiverName: "Ales",
      ReceiverEmail: "Ranish@gmail.com",
    },
  },
  {
    id: 5,
    name: "Sarad",
    date: "2024/7/15",
    status: "Completed",
    info: {
      ReceiverName: "Riti",
      ReceiverEmail: "Sarad@gmail.com",
    },
  },
  {
    id: 6,
    name: "Adidya",
    date: "2024/7/15",
    status: "Completed",
    info: {
      ReceiverName: "Illusion",
      ReceiverEmail: "Adidtya@gmail.com",
    },
  },
  {
    id: 7,
    name: "Pari",
    date: "2024/7/15",
    status: "Completed",
    info: {
      ReceiverName: "Prajwol",
      ReceiverEmail: "Pari@gmail.com",
    },
  },
];

const columnHelper = createColumnHelper<ProjectTableDataTypes>();



const columns = [
  columnHelper.group({
    id: "Main",
    columns: [
      columnHelper.accessor("id", {
        header: "ID",
        footer: "id",
      }),
      columnHelper.accessor("name", {
        header: "Name",
        footer: "name",
      }),
      columnHelper.accessor("date", {
        header: "Date",
        footer: "date",
      }),
      columnHelper.accessor("status", {
        header: "Status",
        footer: "status",
      }),
    ],
  }),

  columnHelper.group({
    header: "Info",
    columns: [
      columnHelper.accessor("info.ReceiverEmail", {
        cell: (email) => <p>{email.getValue()}</p>,
      }),
      columnHelper.accessor("info.ReceiverName", {
        cell: (name) => <p>{name.getValue()}</p>,
      }),
    ],
  }),
];

const ProjectTable = () => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
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
              <th colSpan={header.colSpan} key={header.id}>
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
  );
};

export default ProjectTable;
