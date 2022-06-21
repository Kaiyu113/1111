import Textinput from "../../Common/TextInput/Textinput";
import Imageupload from "../../Common/Imageupload";
import { Input, Select } from "antd";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addproduct } from "../../features/product/productSlice";

const Addproduct = () => {
  const [inputvalue, setinputvalue] = useState({
    Productname: "",
    Productdescription: "",
    Catagory: "",
    Price: "",
    Stock: "",
  });

  const dispatch = useDispatch();

  const handleonchange = (e) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  const { TextArea } = Input;
  const { Option } = Select;
//-------------------------------------
  const handlesubmitAdd = async () => {
    //console.log(inputvalue.Productname);
    //  console.log(inputvalue.Productdescription);


    const productData = {
      productname: inputvalue.Productname,
      productdescription: inputvalue.Productdescription,
      catagory: inputvalue.Catagory,
      price: inputvalue.Price,
      stock: inputvalue.Stock,
    };
    dispatch(addproduct(productData));
  };

  return (
    <div className="product-from-container">
      <h1 className="title-p">Creat Product</h1>

      <ul>
        <Textinput
          type={"text"}
          inputname={"Productname"}
          label={"Product Name"}
          placeholder={""}
          value={inputvalue.Productname}
          onChange={handleonchange}
        />
        <div>Product Description</div>
        <li>
          <TextArea
            type={"text"}
            name={"Productdescription"}
            placeholder="input product description"
            onChange={handleonchange}
            value={inputvalue.Productdescription}
            rows={10}
            maxLength={200}
          />
        </li>
        <label>Category</label>
        <li>
          <Select
            showSearch
            style={{
              width: 200,
            }}
            optionFilterProp="children"
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
            onChange={handleonchange}
            value={inputvalue.Catagory}
            name={"Catagory"}
            placeholder="Select Category"
          >
            <Option value="1">Category1</Option>
            <Option value="2">Category2</Option>
            <Option value="3">Category3</Option>
          </Select>
          <Textinput
            type="number"
            label="Price"
            onChange={handleonchange}
            value={inputvalue.Price}
            inputname={"Price"}
          />
        </li>{" "}
        <li>
          <Textinput
            type="number"
            label="In Stock Quanity"
            onChange={handleonchange}
            value={inputvalue.Stock}
            inputname={"Stock"}
          />
          <Textinput type="text" label="Add Image Link" />
        </li>
        <li>
          <label>Add Image</label>
          <Imageupload />
        </li>
        <button onClick={handlesubmitAdd} className="btnP">
          Add Product
        </button>
      </ul>
    </div>
  );
};

export default Addproduct;
