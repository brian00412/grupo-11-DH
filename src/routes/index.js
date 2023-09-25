const express = require('express');
const { homecontroller, perfilesController } = require('../controllers');
const multer = require('multer');
const carrito = require('../controllers/carrito');




const router = express.Router();

router.get('/', homecontroller);

router.get('/productCart', carrito, );
router.post("/productCart/:id", carrito);
router.get('/myPerfil',perfilesController);


module.exports = router ;