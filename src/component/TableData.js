import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

const TableData = () => {
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
            <tr>
              <th scope="row">1</th>
              <td>Nguyễn Văn A</td>
              <td>0862847362</td>
              <td>modrator</td>
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

            <tr>
              <th scope="row">2</th>
              <td>Nguyễn Văn B</td>
              <td>0862847362</td>
              <td>modrator</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
