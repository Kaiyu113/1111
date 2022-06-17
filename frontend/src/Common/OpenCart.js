import React from "react";

import { BiCartAlt } from "react-icons/bi";

const OpenCart = ({ handleOnClickCart = () => {} }) => {
  return (
    <button className="btn" onClick={handleOnClickCart}>
      {" "}
      <BiCartAlt />
      Cart
    </button>
  );
};

export default OpenCart;
