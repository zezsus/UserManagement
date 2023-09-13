import React, { useState } from "react";
import { BiSave } from "react-icons/bi";
import { FaRegWindowClose } from "react-icons/fa";

const EditUser = (props) => {
  const [userEdit, setUserEdit] = useState({
    id: props.editValue.id,
    name: props.editValue.name,
    phone: props.editValue.phone,
    permission: props.editValue.permission,
  });
  const { id, name, phone, permission } = userEdit;

  const handleChange = (e) => {
    setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updateUser = {
      id: id,
      name: name,
      phone: phone,
      permission: permission,
    };
    props.editInfo(updateUser);
    props.save();
  };
  return (
    <div>
      <div className="add-user mt-3 d-flex flex-column align-items-center justify-content-center">
        <h3 className="mb-3 text-center">SỬA THÔNG TIN THÀNH VIÊN</h3>
        <form className="add-form">
          <div className="mb-3">
            <label className="form-label">Họ và tên</label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={handleChange}
              className="form-control"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Số điện thoại</label>
            <input
              type="text"
              value={phone}
              name="phone"
              onChange={handleChange}
              className="form-control"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Quyền</label>
            <select
              value={permission}
              name="permission"
              onChange={handleChange}
              className="form-select"
              aria-label="Default select example">
              <option defaultValue="default">-- Chọn quyền --</option>
              <option value="Admin">Admin</option>
              <option value="Modrator">Modrator</option>
              <option value="Normal">Normal</option>
            </select>
          </div>
          <div className="w-100 d-flex align-items-center justify-content-center">
            <button
              type="button"
              onClick={handleSave}
              className="btn btn-warning d-flex align-items-center me-auto ms-5">
              <BiSave size={20} className="me-1" />
              Lưu
            </button>

            <button
              type="button"
              onClick={() => props.close()}
              className="btn btn-danger d-flex align-items-center ms-auto me-5">
              <FaRegWindowClose size={20} className="me-1" />
              Đóng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
