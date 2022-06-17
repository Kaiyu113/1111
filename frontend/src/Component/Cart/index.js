import React from "react";
import "antd/dist/antd.css";

import { Button, Input, Modal } from "antd";
import { useState } from "react";
//import Draggable from "react-draggable";
import OpenCart from "../../Common/OpenCart";

const Cart = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Cart-container">
      <OpenCart handleOnClickCart={() => setVisible(true)} />
      <Modal
        title={null}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        style={{
          top: "0px",
          right: "-600px",
        }}
      >
        <div className="title-p">Cart</div>
        <p>Product 1</p>
        <p>Product 2</p>
        <label>Apply Discount Code</label>
        <ul>
          <li>
            <input />
            <Button>Apply</Button>
          </li>
          <hr />

          <li>
            <p>Subtotal</p>
            <p>$499.00</p>
          </li>
          <li>
            <p>Tax</p>
            <p>499</p>
          </li>
          <li>
            <p>Discount</p>
            <p>499</p>
          </li>
          <li>
            <div>Estimated total</div>
            <div>499</div>
          </li>
        </ul>
        <button className="btnP">Continue to Checkout</button>
      </Modal>
    </div>
  );
};

export default Cart;
