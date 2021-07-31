const Products = require("../model/productSchema");

module.exports.getProducts = async function (req, res) {
  try {
    const products = await Products.find({});
    res.json(products);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports.getProductById = async function (req, res) {
  try {
    const product = await Products.findOne({ id: req.params.id });
    res.json(product);
  } catch (error) {
    console.log("error :", error.message);
  }
};
