import React from "react";
import "../assets/scss/Home.scss";
import Header from "./Header";
import Search from "./Search";
import AddUser from "./AddUser";
import TableData from "./TableData";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Search />
        <AddUser />
        <TableData />
      </div>
    </div>
  );
};

export default Home;
