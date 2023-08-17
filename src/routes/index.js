const express = require('express');
const { homecontroller, registercontroller, logincontroller, carritodecompras } = require('../controllers');


const router = express.Router();


router.get('/', homecontroller);
router.get('/register', logincontroller);
router.get('/login', registercontroller);
router.get('/carrodecompras', carritodecompras);

module.exports = router ;