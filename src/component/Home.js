import React, { useState } from "react";
import "../assets/scss/Home.scss";
import Header from "./Header";
import Search from "./Search";
import AddUser from "./AddUser";
import TableData from "./TableData";

import DataUser from "./data.json";

const Home = () => {
  const [data, setData] = useState(DataUser);
  const [searchValue, setSearchValue] = useState("");

  const getDataUserSerch = (search) => {
    setSearchValue(search);
  };

  //search user
  const filteredData = [];
  data.forEach((item) => {
    if (item.name.indexOf(searchValue) !== -1) {
      filteredData.push(item);
    }
  });

  return (
    <div>
      <Header />
      <div className="content">
        <Search getDataUserSerch={(search) => getDataUserSerch(search)} />
        <AddUser />
        <TableData dataUser={filteredData} />
      </div>
    </div>
  );
};

export default Home;
