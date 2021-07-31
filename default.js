const product = require("./constants/product");
const Products = require("./model/productSchema");
console.log("@@@", product);

const DefaultData = async () => {
  try {
    await Products.deleteMany({});
    await Products.insertMany(product);

    console.log("data imported successfully");
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = DefaultData;
