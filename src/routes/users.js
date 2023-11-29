const express = require('express');
const multer = require('multer');
const usersController = require ('../controllers/userController')
const { validationResult } = require ('express-validator')
const {body} = require('express-validator');

const validaciones = [
    body('nombre').notEmpty().withMessage ('Tenes que poner tu nombre').bail().isLength({min: 2, max:20}),
    body('apellido').notEmpty().withMessage ('Tenes que poner tu apellido').isLength({min: 2, max:20}),
    body('email').notEmpty().isEmail ().withMessage ('Tenes que poner tu apellido'),
    body('password').notEmpty().withMessage ('pone tu contra 🤫').isLength({min: 8, max:100}),
    body('categoria').notEmpty().withMessage ('no sabemos a que vienes '),
    body('fileName').notEmpty().withMessage ('seleciona una imagen :0').isIn([ "PNG", "JPEG", "GIF" ]),
]



const userRouter = express.Router();

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

userRouter.get('/login', usersController.logincontroller);
userRouter.post('/login' , usersController.loginvalidar)

userRouter.get('/register', usersController.crear);
userRouter.post('/register',upload.single("foto_usuario"),validaciones,usersController.create);

module.exports = userRouter ;