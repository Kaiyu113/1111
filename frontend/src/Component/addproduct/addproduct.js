import Textinput from "../../Common/TextInput/Textinput";
import Imageupload from "../../Common/Imageupload";
import { Input, Select } from "antd";

const Addproduct = () => {
  const { TextArea } = Input;
  const { Option } = Select;
  return (
    <div className="product-from-container">
      <h1 className="title-p">Creat Product</h1>

      <ul>
        <Textinput type="text" label="Product name" />
        <div>Product Description</div>
        <li>
          <TextArea rows={10} placeholder="maxLength is 6" maxLength={6} />
        </li>
        <div>Category</div>
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
          <Textinput type="text" label="Price" />
        </li>{" "}
        <li>
          <Textinput type="text" label="In Stock Quanity" />
          <Textinput type="text" label="Add Image Link" />
        </li>
        <li>
          <p>Add Image</p>
          <Imageupload />
        </li>
        <button className="btnP">Add Product</button>
      </ul>
    </div>
  );
};

export default Addproduct;
