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
  const [editValue, setEditValue] = useState({});

  const handleDataUserSerch = (search) => {
    setSearchValue(search);
  };

  //search user
  const filteredData = [];
  data.map((item) => {
    if (item.name.indexOf(searchValue) !== -1) {
      return filteredData.push(item);
    } else {
      return filteredData;
    }
  });

  //add user
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

  //edit user
  const handeleEditUser = (edit) => {
    setEditValue(edit);
  };

  const getUserEditInfo = (info) => {
    const updatedData = data.map((value) => {
      if (value.id === info.id) {
        return {
          ...value,
          name: info.name,
          phone: info.phone,
          permission: info.permission,
        };
      } else {
        return value;
      }
    });
    setData(updatedData);
  };

  //delete user
  const handeleDeleteUser = () => {
    console.log("delete");
  };

  return (
    <div>
      <Header />
      <div className="content">
        <Search getDataUserSerch={handleDataUserSerch} />
        <AddUser addNewUser={handleAddNewUser} />
        <TableData
          dataUser={filteredData}
          editUser={handeleEditUser}
          editValue={editValue}
          userEditInfo={getUserEditInfo}
          deleteUser={handeleDeleteUser}
        />
      </div>
    </div>
  );
};

export default Home;
