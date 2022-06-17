import React from "react";
import products from "../../content/products";
import "./index.css";
const Productcompunent = () => {
  return (
    <div className="grid-container">
      {products.map((product) => {
        return (
          <div key={product.id} className="grid-item">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>
              <button>Add</button>
              <button>edit</button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Productcompunent;
