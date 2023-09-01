const express = require('express');
const { homecontroller, registercontroller, logincontroller, productCartcontroller } = require('../controllers');
const multer = require('multer');




const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/personas");
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split(".")[1];
        cb(null, file.fieldname + "-" + Date.now() + `.${extension}`)
    }
})


router.get('/', homecontroller);
router.get('/login', logincontroller);
router.get('/register', registercontroller);
router.get('/productCart', productCartcontroller);



module.exports = router ;