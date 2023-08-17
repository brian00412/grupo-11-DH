const express = require("express");
const productController = require("../controllers/productsC");
const routerProduct = express.Router();

routerProduct.get("/productDetail", productController);

module.exports = routerProduct;