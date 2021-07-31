const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: String,
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  description: String,
  tagline: String,
});

const Products = mongoose.model("Products", productSchema);
module.exports= Products;
