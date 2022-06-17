import React from "react";
import { Select, Button } from "antd";
import "antd/dist/antd.css";
import Productlist from "../Form/Productlist";
const Home = () => {
  const { Option } = Select;
  const handleadd = () => {
    window.location.href = "/addproduct";
  };
  return (
    <div className="product-container">
      <ul>
        <li>
          <p className="title-p">Products</p>
        </li>
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

          <Button onClick={handleadd}>Add Product</Button>
        </li>
      </ul>
      <Productlist />
    </div>
  );
};

export default Home;
