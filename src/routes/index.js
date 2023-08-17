const express = require('express');
const { homecontroller, registercontroller, logincontroller } = require('../controllers');


const router = express.Router();


router.get('/', homecontroller);
router.get('/register', logincontroller);
router.get('/login', registercontroller);


module.exports = router ;