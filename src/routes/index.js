const express = require('express');
const { homecontroller, registercontroller, logincontroller, productCartcontroller } = require('../controllers');



const router = express.Router();


router.get('/', homecontroller);
router.get('/register', logincontroller);
router.get('/login', registercontroller);
router.get('/productCart', productCartcontroller);



module.exports = router ;