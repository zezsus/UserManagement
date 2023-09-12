import React from "react";
import { BiAddToQueue } from "react-icons/bi";

const AddUser = () => {
  return (
    <div>
      <div className="add-user my-5 d-flex flex-column align-items-center justify-content-center">
        <h3 className="mb-3 text-center">THÊM MỚI THÀNH VIÊN</h3>
        <form className="add-form">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue="default">-- Chọn quyền --</option>
              <option value="admin">Admin</option>
              <option value="modrator">Modrator</option>
              <option value="normal">Normal</option>
            </select>
          </div>
          <div className="w-100 d-flex align-items-center justify-content-center">
            <button
              type="submit"
              className="btn btn-primary d-flex align-items-center">
              <BiAddToQueue size={20} className="me-1" />
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
