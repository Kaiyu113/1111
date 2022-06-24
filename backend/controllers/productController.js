const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

const getCart = asyncHandler(async (req, res) => {
  const carts = await Cart.find({ userid: req.user.id });
  res.status(200).json(carts);
});

const addToCart = asyncHandler(async (req, res) => {
  const { productid, productname, userid } = req.body;

  const cart = await Cart.create({
    productname: productname,
    productid: productid,
    userid: userid,
  });
  //减少库存
  if (cart) {
    res.status(201).json({
      _id: cart.id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

const productAdd = asyncHandler(async (req, res) => {
  const { productname, productdescription, catagory, price, stock, Images } =
    req.body;

  const product = await Product.create({
    productname: productname,
    productdescription: productdescription,
    catagory: catagory,
    price: price,
    stock: stock,
    Images: Images,
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
  getProducts,
  addToCart,
  getCart,
};
