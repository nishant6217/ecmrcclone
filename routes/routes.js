const express = require("express");
const router = express.Router();
const user = require("../controller/userController");
const product = require("../controller/productController");
console.log("inside route !!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

router.post("/signup", user.userSignup);
router.post("/login", user.userLogin);
router.get("/products", product.getProducts);
router.get("/products/:id", product.getProductById);
router.get("/ping", (req, res) => {
    return res.status(200).json({ message: "pong" });
  });

module.exports = router;
