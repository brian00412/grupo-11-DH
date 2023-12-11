const express = require("express");
const multer = require("multer");
const productController = require("../controllers/productsC");
const routerProduct = express.Router();
const { check } = require ('express-validator')

const validacionesCreateProduc = [
    check('name').notEmpty().withMessage('Pon el nombre del producto').isLength({min: 5, max:100}),
    check('description').notEmpty().withMessage('Pon la descripcion del producto').bail().isLength({min: 10, max:200}).withMessage('    tiene que tener mas de 10 caracteres'),
    check('category').notEmpty().withMessage('categoria de tu producto'),
    check('price').notEmpty().withMessage('pon aqui el precio de tu producto'),
    check('descuento').notEmpty().withMessage('aqui tu descuento'),
    check('color').notEmpty().withMessage('que color tiene tu producto'),
]
 

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


routerProduct.get('/prodt', productController.datosProds);
routerProduct.get('/products', productController.listado);
routerProduct.get("/productDetail/:id", productController.detalles);



routerProduct.get("/crearProduct", productController.crear);
routerProduct.post("/crearProduct",upload.single("image"),validacionesCreateProduc, productController.create);

routerProduct.get("/editarProducto/:id?", productController.editarForm);
routerProduct.post("/editarProducto/:id?", upload.single("image"),validacionesCreateProduc, productController.editar);

routerProduct.post("/eliminarProducto/:id", productController.eliminar)

module.exports = routerProduct;