import React from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";

import "./styles.css";
import "react-table/react-table.css";

const tableData = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
];
//http://jsonplaceholder.typicode.com/posts
const columns = [
  {
    Header: "User ID",
    accessor: "userId"
  },
  {
    Header: "ID",
    accessor: "id"
  },
  {
    Header: "Title",
    accessor: "title"
  },
  {
    Header: "Body",
    accessor: "body"
  }
];
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ReactTable data={tableData} columns={columns} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
