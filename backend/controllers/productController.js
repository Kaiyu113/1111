const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});
//========================
const getCart = asyncHandler(async (req, res) => {
  const carts = await Cart.find({ userid: req.user.id });
  res.status(200).json(carts);
});
//========================
const addToCart = asyncHandler(async (req, res) => {
  const { productid, productName, userid, quantity, price, images } = req.body;

  const cart = await Cart.create({
    productName: productName,
    productid: productid,
    userid: userid,
    quantity: 1,
    price: price,
    images: images,
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

//==================

//========================
const productAdd = asyncHandler(async (req, res) => {
  const { productName, productdescription, catagory, price, stock, images } =
    req.body;

  if (!productName || !images) {
    res.status(400);
    throw new Error("Please add productName and Images");
  }

  const product = await Product.create({
    productName: productName,
    productDescription: productdescription,
    catagory: catagory,
    price: price,
    stock: stock,
    images: images,
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
//========================
const deleteCart = asyncHandler(async (req, res) => {
  const Cart = await Cart.findById(req.params.id);

  if (!Cart) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (Cart.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Cart.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  productAdd,
  getProducts,
  addToCart,
  getCart,
  deleteCart,
};
