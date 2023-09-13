import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

const TableData = (props) => {
  return (
    <div>
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
                  <th scope="row">{user.id}</th>
                  <td className="text-start">{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.parmission}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-warning d-flex align-items-center">
                        <BiEdit size={20} className="me-1" />
                        Sửa
                      </button>
                      <button
                        type="button"
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
    </div>
  );
};

export default TableData;
