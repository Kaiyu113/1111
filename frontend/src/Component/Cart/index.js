import React from "react";
import "antd/dist/antd.css";

import { Button, Modal } from "antd";
import { useState } from "react";
//import Draggable from "react-draggable";
import OpenCart from "../../Common/OpenCart";

const Cart = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <OpenCart handleOnClickCart={() => setVisible(true)} />
      <Modal
        title={null}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        style={{
          top: "0px",
          right: "-1000px",
        }}
      >
        <p className="title-p">Cart</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <button className="btnP">Continue to Checkout</button>
      </Modal>
    </>
  );
};

export default Cart;
