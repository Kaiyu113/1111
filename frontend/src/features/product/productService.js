import axios from "axios";

const API_URL = "/api/product/";

// Add Product to database

const addproduct = async (productData) => {
  let userInfo = localStorage.getItem("user");

  //token
  userInfo = JSON.parse(userInfo);
  // console.log(userInfo);
  let token = userInfo["token"];
  const response = await axios.post(API_URL + "addproduct", productData, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

//----------------
const deleteCart = async (cartId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + cartId, config);

  return response.data;
};

const productService = {
  addproduct,
  deleteCart,
};

export default productService;
