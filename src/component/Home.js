import React, { useState } from "react";
import "../assets/scss/Home.scss";
import Header from "./Header";
import Search from "./Search";
import AddUser from "./AddUser";
import TableData from "./TableData";
import { v4 as uuidv4 } from "uuid";

import DataUser from "./data.json";

const Home = () => {
  const [data, setData] = useState(DataUser);
  const [searchValue, setSearchValue] = useState("");

  const handleDataUserSerch = (search) => {
    setSearchValue(search);
  };

  //search user
  const filteredData = [];
  data.map((item) => {
    if (item.name.indexOf(searchValue) !== -1) {
      filteredData.push(item);
    }
  });

  const handleAddNewUser = (name, phone, permission) => {
    const newUser = {
      id: uuidv4(),
      name: name,
      phone: phone,
      permission: permission,
    };
    const updateUser = [...data, newUser];
    setData(updateUser);
  };

  return (
    <div>
      <Header />
      <div className="content">
        <Search getDataUserSerch={(search) => handleDataUserSerch(search)} />
        <AddUser
          addNewUser={(name, phone, permission) =>
            handleAddNewUser(name, phone, permission)
          }
        />
        <TableData dataUser={filteredData} />
      </div>
    </div>
  );
};

export default Home;
