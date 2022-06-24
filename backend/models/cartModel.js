const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    productid: {
      type: String,
    },
    productname: {
      type: String,
    },
    userid: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
