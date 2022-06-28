const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    productid: {
      type: String,
    },
    productName: {
      type: String,
    },
    userid: {
      type: String,
    },
    price: {
      type: Number,
    },
    images: {
      type: Array,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
