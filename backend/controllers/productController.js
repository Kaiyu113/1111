const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const productAdd = asyncHandler(async (req, res) => {
  const { productname, productdescription, catagory, price, stock } = req.body;

  const product = await Product.create({
    productname: productname,
    productdescription: productdescription,
    catagory: catagory,
    price: price,
    stock: stock,
  });

  if (product) {
    res.status(201).json({
      _id: product.id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

module.exports = {
  productAdd,
};
