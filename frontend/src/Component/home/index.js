import React from "react";
import { Select, Button } from "antd";
import "antd/dist/antd.min.css";
import "./App.css";

import ProductComponent from "./ProductComponent";
const Home = () => {
  const { Option } = Select;
  const handleadd = () => {
    window.location.href = "/addproduct";
  };
  return (
    <div className="producr-allcontainer">
      <div className="product1-container">
        <div className="title-p">Products</div>
        <ul>
          <li>
            <Select
              showSearch
              style={{
                width: 200,
              }}
              placeholder="Select Order"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">last added</Option>
              <Option value="2">Price: low to high</Option>
              <Option value="3">Price: high to low</Option>
            </Select>
          </li>
          <li>
            <button className="btnP" onClick={handleadd}>
              Add Product
            </button>
          </li>
        </ul>
      </div>
      <div class="product-list ">
        <ProductComponent />
      </div>
    </div>
  );
};

export default Home;
