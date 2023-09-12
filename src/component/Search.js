import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div>
      <div className="search-form input-group mb-3 ms-3">
        <input
          type="text"
          className="search-input-form form-control"
          placeholder="Nhập tên thành viên"
        />
        <button className="btn btn-secondary d-flex align-items-center">
          <BsSearch className="me-1" />
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default Search;
