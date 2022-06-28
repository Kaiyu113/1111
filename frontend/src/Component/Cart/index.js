import React from "react";
import "antd/dist/antd.min.css";
import "./cart.css";
import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import OpenCart from "../../Common/OpenCart";
import Axios from "axios";

const Cart = () => {
  const [visible, setVisible] = useState(false);
  const [Cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const total = Cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [Cart]);

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
  }, []);

  const increment = (id) => {
    Cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });

    setCart([...Cart]);
    getCart(Cart);
  };

  const decrement = (id) => {
    Cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });

    setCart([...Cart]);
    getCart(Cart);
  };
  const removeProduct = (id) => {
    Cart.forEach((item, index) => {
      if (item._id === id) {
        Cart.splice(index, 1);
      }
    });

    setCart([...Cart]);
    getCart(Cart);
  };

  console.log(Cart);
  return (
    <div className="Cart-container">
      <OpenCart
        handleOnClickCart={() => {
          //getCart();
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
        {Cart.map((product) => {
          return (
            <>
              <div className="detail cart" key={product._id}>
                <img
                  className="images"
                  src={`http://localhost:5000/${product.images}`}
                  alt=""
                />

                <div className="box-detail">
                  <h2>{product.productName}</h2>

                  <h3>$ {product.price * product.quantity}</h3>

                  <div className="amount">
                    <button onClick={() => decrement(product._id)}> - </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => increment(product._id)}> + </button>
                  </div>

                  <div
                    className="delete"
                    onClick={() => removeProduct(product._id)}
                  >
                    X
                  </div>
                </div>
              </div>
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
            <div className="total">
              <h3>Total: $ {total}</h3>
            </div>
          </li>
          <li>
            <p>Tax</p>
          </li>
          <li>
            <p>Discount</p>
          </li>
          <li>
            <div>Estimated total</div>
          </li>
        </ul>
        <button className="btnP">Continue to Checkout</button>
      </Modal>
    </div>
  );
};

export default Cart;
