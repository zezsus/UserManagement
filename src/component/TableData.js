import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import EditUser from "./EditUser";

const TableData = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userEdit, setUserEdit] = useState("");

  const handleEdit = (data) => {
    setIsEdit(true);
    props.editUser(data);
  };

  const getUserEdit = (info) => {
    setUserEdit(info);
    props.userEditInfo(info);
  };

  const handleDelete = () => {
    props.deleteUser();
  };

  const handleClose = () => {
    setIsEdit(false);
  };

  const handleSave = () => {
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit === false ? (
        <div className="mx-4">
          <h3 className="mb-3 text-center">DANH SÁCH THÀNH VIÊN</h3>

          <table className="table table-hover">
            <thead>
              <tr className="text-center">
                <th scope="col">STT</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Quyền </th>
                <th scope="col">Thao tác </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {props.dataUser.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td className="text-start">{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.permission}</td>
                    <td>
                      <div className="btn-group">
                        <button
                          type="button"
                          onClick={() => handleEdit(user)}
                          className="btn btn-warning d-flex align-items-center">
                          <BiEdit size={20} className="me-1" />
                          Sửa
                        </button>
                        <button
                          type="button"
                          onClick={handleDelete}
                          className="btn btn-danger d-flex align-items-center">
                          <RiDeleteBin2Line size={20} className="me-1" />
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <EditUser
            close={handleClose}
            save={handleSave}
            editValue={props.editValue}
            editInfo={getUserEdit}
          />
        </div>
      )}
    </div>
  );
};

export default TableData;
