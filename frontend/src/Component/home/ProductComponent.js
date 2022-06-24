import { Link } from "react-router-dom";
import "./App.css";
import Axios from "axios";

import { useState, useEffect } from "react";

const ProductComponent = () => {
  const [Products, setProducts] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    getProducts(Products);
  }, []);

  const getProducts = () => {
    Axios.get("/api/product/getproducts").then((response) => {
      if (response.data) {
        setProducts([...Products, ...response.data]);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };
  console.log(Products);
  const addToCart = (productid, productname) => {
    let userInfo = localStorage.getItem("user");

    //token
    userInfo = JSON.parse(userInfo);
    let productData = {
      productid: productid,
      productname: productname,
      userid: userInfo["_id"],
    };

    // console.log(userInfo);
    let token = userInfo["token"];
    Axios.post("/api/product/addtocart", productData, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {});

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3500);
  };

  return (
    <div class="product-container" key={"values._id"}>
      {Products.map((values) => {
        return (
          <>
            <div className="card">
              <div className="content">
                <Link to={`/product/${values._id}`}>
                  <div className="title">{values.category}</div>
                  <div className="image">
                    <img
                      src={`http://localhost:5000/${values.images}`}
                      alt={values.productname}
                    />
                  </div>
                </Link>
                <div className="text">{values.productname}</div>
                <div className="text">$ {values.price}</div>

                <button
                  onClick={() => addToCart(values._id, values.productname)}
                  className="buy-button details"
                >
                  {!isAdded ? "ADD TO CART" : "✔ ADDED"}
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductComponent;
