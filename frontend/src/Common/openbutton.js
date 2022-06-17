import React from "react";
import { FaRegUser } from "react-icons/fa";

const Openbutton = ({ handleOnClickopen = () => {} }) => {
  return (
    <button className="btn" onClick={handleOnClickopen}>
      {" "}
      <FaRegUser />
      Sign In
    </button>
  );
};

export default Openbutton;
