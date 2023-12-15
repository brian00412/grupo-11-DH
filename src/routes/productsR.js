const express = require("express");
const multer = require("multer");
const productController = require("../controllers/productsC");
const routerProduct = express.Router();
const { check } = require ('express-validator')

const validacionesCreateProduc = [
    check('name').notEmpty().withMessage('Pon el nombre del producto').isLength({min: 5, max:100}),
    check('description').notEmpty().withMessage('Pon la descripcion del producto').bail().isLength({min: 10, max:1000}).withMessage('    tiene que tener mas de 10 caracteres'),
    check('category').notEmpty().withMessage('Categoria de tu producto'),
    check('price').notEmpty().withMessage('Pon aqui el precio de tu producto'), 
    check('descuento').notEmpty().withMessage('Aqui tu descuento'),
    check('color').notEmpty().withMessage('Que color tiene tu producto'),
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


routerProduct.get('/apis/products', productController.datosProds);
routerProduct.get('/products', productController.listado);
routerProduct.get("/productDetail/:id", productController.detalles);



routerProduct.get("/crearProduct", productController.crear);
routerProduct.post("/crearProduct",upload.single("image"),validacionesCreateProduc, productController.create);

routerProduct.get("/editarProducto/:id?", productController.editarForm);
routerProduct.post("/editarProducto/:id?", upload.single("image"),validacionesCreateProduc, productController.editar);

routerProduct.post("/eliminarProducto/:id", productController.eliminar)

routerProduct.post("/buscar", productController.buscardor)

module.exports = routerProduct;