import "./App.css";
// import BasicTable from './component/BasicTable'
// import Dashboard from "./component/Dashboard"
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Table from "./component/Table";
import SortingTable from "./component/SortingTable";
import BasicTable from "./component/BasicTable";
const Genres = ({ values }) => {
  return (
    <>
      {values.map((genre, id) => {
        return (
          <span key={id} className="badge">
            {genre}
          </span>
        );
      })}
    </>
  );
};
const App = () => {
  const [data, setData] = useState([]);
  const TABLE_COLUMN = useMemo(
    () => [
      {
        //first group TV show
        Header: "TV Show",
        //first group column
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
        ],
      },
      {
        //second group details
        Header: "Details",
        //second group columns
        columns: [
          {
            Header: "Language",
            accessor: "show.language",
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres",
            Cell: ({ cell: { value } }) => <Genres values={value} />,
          },
          {
            Header: "Runtime",
            accessor: "show.runtime",
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);
  return (
    <div className="App">
      <SortingTable />
    </div>
  );
};

export default App;
