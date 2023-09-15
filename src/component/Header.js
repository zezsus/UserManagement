import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleDetail = () => {
    history.push("/detail");
  };
  return (
    <div>
      <div className="header w-100 bg-black text-white text-center p-5 mb-3">
        <h1>QUẢN LÝ THÀNH VIÊN</h1>
        <button onClick={handleDetail}>Detai User</button>
      </div>
    </div>
  );
};

export default Header;
