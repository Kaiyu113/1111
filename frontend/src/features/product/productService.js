import axios from "axios";

const API_URL = "/api/product/";

// Add Product to database

const addproduct = async (productData) => {
  const response = await axios.post(API_URL + "addproduct", productData);

  return response.data;
};

//Get Product Data
// const getProducts = (variables) => {
//   axios.post("/api/product", variables).then((response) => {
//     if (response.data.success) {
//       if (variables.loadMore) {
//         setItem([...Products, ...response.data.products]);
//       } else {
//         setItem(response.data.products);
//       }
//       setPostSize(response.data.postSize);
//     } else {
//       alert("Failed to fectch product datas");
//     }
//   });
// };

//------------------

const productService = {
  addproduct,
  getProducts,
};

export default productService;
