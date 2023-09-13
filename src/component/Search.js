import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = (props) => {
  const [dataUser, setDataUser] = useState("");

  const handleSearchChange = (e) => {
    setDataUser(e.target.value);
    props.getDataUserSerch(dataUser);
  };

  const getTextSearch = () => {
    props.getDataUserSerch(dataUser);
  };

  return (
    <div>
      <div className="search-form input-group mb-3 ms-3">
        <input
          type="text"
          className="search-input-form form-control"
          value={dataUser}
          onChange={handleSearchChange}
          placeholder="Nhập tên cần tìm"
        />
        <button
          className="btn btn-secondary d-flex align-items-center"
          onClick={getTextSearch}>
          <BsSearch className="me-1" />
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default Search;
