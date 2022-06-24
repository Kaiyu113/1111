import React from "react";
import "antd/dist/antd.min.css";

import { Button, Input, Modal } from "antd";
import { useState, useEffect } from "react";
//import Draggable from "react-draggable";
import OpenCart from "../../Common/OpenCart";
import Axios from "axios";

const Cart = () => {
  const [visible, setVisible] = useState([]);
  const [Cart, setCart] = useState([]);

  const getCart = () => {
    let userInfo = localStorage.getItem("user");

    userInfo = JSON.parse(userInfo);
    let token = userInfo["token"];
    Axios.get("/api/product/getcart", {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      if (response.data) {
        setCart([...Cart, ...response.data]);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  useEffect(() => {
    getCart(Cart);
    // console.log("Products");
  }, []);

  return (
    <div className="Cart-container">
      <OpenCart
        handleOnClickCart={() => {
          getCart();
          setVisible(true);
        }}
      />
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
        {Cart.map((values) => {
          return (
            <>
              <p>{values.productname}</p>
            </>
          );
        })}
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
