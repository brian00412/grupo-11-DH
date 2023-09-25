const express = require('express');
const { homecontroller, registercontroller, logincontroller, productCartcontroller, usersController } = require('../controllers');
const carrito = require('../controllers/carrito');




const router = express.Router();

router.get('/', homecontroller);

router.get('/productCart', carrito, );
router.post("/productCart/:id", carrito);


module.exports = router ;