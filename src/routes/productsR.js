const express = require("express");
const multer = require("multer");
const productController = require("../controllers/productsC");
const routerProduct = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/productos");
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split(".")[1];
        cb(null, file.fieldname + "-" + Date.now() + `.${extension}`)
    }
})

const upload = multer({ storage: storage})

routerProduct.get("/productDetail/:id", productController.detalles);

routerProduct.get("/crearProduct", productController.crear);
routerProduct.post("/crearProduct",upload.single("image"), productController.create);

routerProduct.get("/editarProducto/:id?", productController.editarForm);
routerProduct.post("/editarProducto/:id?", upload.single("image"), productController.editar);

routerProduct.post("/eliminarProducto/:id", productController.eliminar)


module.exports = routerProduct;