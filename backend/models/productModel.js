const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productname: {
      type: String,
    },
    productdescription: {
      type: String,
    },
    catagory: {
      type: String,
    },
    price: {
      type: String,
    },
    stock: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
