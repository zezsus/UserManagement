import React, { useEffect, useState } from "react";
import "../assets/scss/Home.scss";
import Header from "./Header";
import Search from "./Search";
import AddUser from "./AddUser";
import TableData from "./TableData";
import { v4 as uuidv4 } from "uuid";

import DataUser from "./data.json";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [editValue, setEditValue] = useState({});

  useEffect(() => {
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(DataUser)); //JSON.stringify(data): chuyển object thành string
    } else {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setData(userData);
    }
  }, []);

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
    //đẩy vào localStorage
    localStorage.setItem("userData", JSON.stringify(updateUser));
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

    //đẩy vào localStorage
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };

  //delete user
  const handeleDeleteUser = (deleteUser) => {
    const updatedData = data.filter((value) => value.id !== deleteUser);
    setData(updatedData);

    //đẩy vào localStorage
    localStorage.setItem("userData", JSON.stringify(updatedData));
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
