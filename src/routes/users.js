const express = require('express');
const multer = require('multer');
const usersController = require ('../controllers/userController')



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

userRouter.get('/register', usersController.crear);
userRouter.post('/register',upload.single("foto_usuario"), usersController.create);

module.exports = userRouter ;