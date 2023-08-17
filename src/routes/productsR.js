const express = require("express");
const productController = require("../controllers/productsC");
const routerProduct = express.Router();

routerProduct.get("/productDetail", productController.detalles);
routerProduct.get("/crearProduct", productController.crear);
routerProduct.get("/editarProducto", productController.editar);

routerProduct.post("/crearProduct", productController.create);


module.exports = routerProduct;