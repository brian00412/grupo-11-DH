const express = require('express');
const multer = require('multer');
const usersController = require ('../controllers/userController')
const { validationResult } = require ('express-validator')
const { check } = require ('express-validator')

const validacionesLogin = [
    check('email').notEmpty().withMessage('aqui va tu gmail 📧'),
    check('password').notEmpty().withMessage('aqui va tu contraseña 🤫'),
]

const validaciones = [
    check('nombre').notEmpty().withMessage ('Tenes que poner tu nombre 🙂').bail()   .withMessage ('minimo 2 caracteres'),
    check('apellido').notEmpty().withMessage ('Tenes que poner tu apellido😃').bail().isLength({min: 2, max:20}) .withMessage ('minimo 2 caracteres'),
    check('email').notEmpty().withMessage ('Tenes que poner tu gmail 📧').bail().isEmail().withMessage ('tiene que ser un gmail exitente'),
    check('password').notEmpty().withMessage ('pone tu contra 🤫').bail().isLength({min: 8, max:100}).withMessage ('tiene que tener entre 8 a 20 caracteres🤫'),
    check('categoria').notEmpty().withMessage ('no sabemos a que vienes '),
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

userRouter.get('/users', usersController.datosUser);

userRouter.get('/login', usersController.logincontroller);
userRouter.post('/login' ,validacionesLogin , usersController.loginvalidar)

userRouter.get('/register', usersController.crear);
userRouter.post('/register', upload.single("foto_usuario"),validaciones,usersController.create,);

module.exports = userRouter ;