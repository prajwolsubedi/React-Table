import "./App.css";
import ProjectTable from "./components/ProjectTable/ProjectTable";
import { useMemo } from "react";
// import BasicTable from "./components/BasicTable/BasicTable";
import { COLUMNS } from "./components/ServerTable/columns";
import DATA from "./MOCK_DATA.json";
import ServerTable from "./components/ServerTable/ServerTable";
import { BasicTableColumnType } from "./components/BasicTable/Columns";
const App = () => {
  // const DATAS: BasicTableColumnType[] = useMemo(() => DATA, []);
  // const COLUMN: ColumnDef<BasicTableColumnType>[] = useMemo(() => COLUMNS, []);
  const data: BasicTableColumnType[] = useMemo(() => DATA, []);
  const columns:any = useMemo(() => COLUMNS, []);
  return (
    <div>
      <ServerTable data={data} columns={columns} />
      {/* <ProjectTable /> */}
      {/* <BasicTable data={DATAS} columns={COLUMN} /> */}
    </div>
  );
};
export default App;
