import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const DetailUser = () => {
  const history = useHistory();

  const handelHome = () => {
    history.push("/");
  };
  return (
    <div>
      <p>Chi tiết thành viên</p>
      <button onClick={handelHome}>Home</button>
      <Link to="/detail"></Link>
    </div>
  );
};

export default DetailUser;
