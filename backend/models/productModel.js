const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    catagory: {
      type: Number,
    },
    price: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    images: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
