const express = require('express');
const { homecontroller, registercontroller, logincontroller, productCartcontroller, usersController } = require('../controllers');
const multer = require('multer');
const carrito = require('../controllers/carrito');




const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/users");
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split(".")[1];
        cb(null, file.fieldname + "-" + Date.now() + `.${extension}`)
    }
})
const upload = multer({ storage: storage})

router.get('/', homecontroller);
router.get('/login', logincontroller);

router.get('/register', usersController.crear);
router.post('/register',upload.single("foto_usuario"), usersController.create);

router.get('/productCart', carrito, );
router.post("/productCart/:id", carrito);


module.exports = router ;