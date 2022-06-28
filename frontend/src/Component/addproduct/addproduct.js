import Textinput from "../../Common/TextInput/Textinput";
import FileUpload from "../../Common/FileUpload";
import { Input, Select } from "antd";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addproduct, reset } from "../../features/product/productSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const [inputvalue, setinputvalue] = useState({
    productName: "",
    Productdescription: "",
    Catagory: "",
    Price: 0,
    Stock: 0,
  });
  const [images, setImages] = useState([]);

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const handleonchange = (e) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  const { TextArea } = Input;
  const { Option } = Select;
  //-------------------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Successful Login");
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
  const handlesubmitAdd = async () => {
    //console.log(inputvalue.productName);
    //  console.log(inputvalue.Productdescription);

    const productData = {
      productName: inputvalue.productName,
      productdescription: inputvalue.Productdescription,
      catagory: inputvalue.Catagory,
      price: inputvalue.Price,
      stock: inputvalue.Stock,
      images: images,
    };
    dispatch(addproduct(productData));
  };

  return (
    <div className="product-from-container">
      <h1 className="title-p">Creat Product</h1>

      <ul>
        <Textinput
          type={"text"}
          inputname={"productName"}
          label={"Product Name"}
          placeholder={""}
          value={inputvalue.productName}
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
            <Option value="Category1">Category1</Option>
            <Option value="Category2">Category2</Option>
            <Option value="Category3">Category3</Option>
          </Select>
          {/* 
          <select onChange={handleonchange} value={inputvalue.Catagory}>
            {Category.map((e) => (
              <option key={e.key} value={e.key}></option>
            ))}
          </select> */}

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
          <FileUpload refreshFunction={updateImages} />
        </li>
        <button onClick={handlesubmitAdd} className="btnP">
          Add Product
        </button>
      </ul>
    </div>
  );
};

export default Addproduct;
