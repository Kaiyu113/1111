import { Link } from "react-router-dom";
import "./App.css";
import Axios from "axios";

import { useState, useEffect } from "react";

const ProductComponent = () => {
  const [Products, setProducts] = useState([]);

  const getProducts = () => {
    Axios.post("/api/product/getProducts").then((response) => {
      if (response.data.success) {
        setProducts([...Products, ...response.data.products]);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  useEffect(() => {
    getProducts(Products);
    console.log("Products");
  }, []);

  return (
    <div class="product-container" key={"values.id"}>
      {Products.map((values) => {
        return (
          <>
            <Link to={`/product/${values.id}`}>
              <div className="card">
                <div className="content">
                  <div className="title">{values.category}</div>
                  <div className="image">
                    <img src={values.image} alt={values.title} />
                  </div>

                  <div className="text">{values.title}</div>
                  <div className="text">$ {values.price}</div>

                  <button className="buy-button details"> Add to Cart</button>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default ProductComponent;
