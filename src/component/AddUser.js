import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FaRegWindowClose } from "react-icons/fa";

const AddUser = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [people, setPeople] = useState({
    id: "",
    name: "",
    phone: "",
    parmission: "",
  });
  const { id, name, phone, parmission } = people;

  const handleAddChange = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };

  const handleAddNew = () => {
    setIsDisplay(true);
  };
  const handleClose = () => {
    setIsDisplay(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(people);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-5">
      {!isDisplay ? (
        <button className="btn btn-info" onClick={handleAddNew}>
          <BiAddToQueue size={20} className="me-1" />
          Thêm mới
        </button>
      ) : (
        <div className="add-user mt-3 d-flex flex-column align-items-center justify-content-center">
          <h3 className="mb-3 text-center">THÊM MỚI THÀNH VIÊN</h3>
          <form className="add-form">
            <div className="mb-3">
              <input
                type="text"
                value={name}
                name="name"
                className="form-control"
                placeholder="Nhập họ và tên"
                onChange={handleAddChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={phone}
                name="phone"
                className="form-control"
                placeholder="Nhập số điện thoại"
                onChange={handleAddChange}
              />
            </div>
            <div className="mb-3">
              <select
                name="parmission"
                className="form-select"
                aria-label="Default select example"
                value={parmission}
                onChange={handleAddChange}>
                <option defaultValue="default">-- Chọn quyền --</option>
                <option value={1}>Admin</option>
                <option value={2}>Modrator</option>
                <option value={3}>Normal</option>
              </select>
            </div>
            <div className="w-100 d-flex align-items-center justify-content-center">
              <button
                type="submit"
                onClick={handleAdd}
                className="btn btn-info d-flex align-items-center me-auto ms-5">
                <BiAddToQueue size={20} className="me-1" />
                Thêm
              </button>
              <button
                type="button"
                className="btn btn-danger d-flex align-items-center ms-auto me-5"
                onClick={handleClose}>
                <FaRegWindowClose size={20} className="me-1" />
                Đóng
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddUser;
