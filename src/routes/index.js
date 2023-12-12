const express = require('express');
const { homecontroller, perfilesController } = require('../controllers');
const multer = require('multer');
const carrito = require('../controllers/carrito');




const router = express.Router();

router.get('/', homecontroller);

router.get('/productCart', carrito.ver );
router.post("/productCart/:id", carrito.agregar);
router.get('/myPerfil',perfilesController);


module.exports = router ;