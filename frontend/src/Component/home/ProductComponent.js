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
  //console.log(Products);
  const addToCart = (productid, productName, price, images) => {
    let userInfo = localStorage.getItem("user");

    //token
    userInfo = JSON.parse(userInfo);
    let productData = {
      productid: productid,
      productName: productName,
      userid: userInfo["_id"],
      quantiry: 1,
      price: price,
      images: images,
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
    <div class="product-container">
      {Products.map((values) => {
        return (
          <>
            <div className="card" key={values._id}>
              <div className="content">
                <Link to={`/product/${values._id}`}>
                  <div className="title">{values.productName}</div>
                  <div className="image">
                    <img
                      src={`http://localhost:5000/${values.images}`}
                      alt={values.productName}
                    />
                  </div>
                </Link>

                <div className="title">$ {values.price}</div>

                <button
                  onClick={() =>
                    addToCart(
                      values._id,
                      values.productName,
                      values.price,
                      values.images
                    )
                  }
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
