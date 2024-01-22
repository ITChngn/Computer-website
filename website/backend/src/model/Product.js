const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name!"],
    maxLength: [50, "Max length 50"],
  },
  description: {
    type: String,
    required: [true, "Please enter description!"],
  },
  picture: {
    type: String,
    required: [true, "Please enter picture!"],
    default: "no-photo.jpg",
  },
  category: {
    required: [true, "Please enter category!"],
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  body: {
    required: [true, "Please enter body!"],
    type: String,
  },
  price: {
    type: String,
    required: [true, "Please enter price!"],
    default: "0₮",
  },
  stock: {
    type: Number,
    required: [true, "Please enter stock!"],
    default: "0",
  },
  deliver: {
    type: Boolean,
    required: [true, "Please enter stock!"],
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
