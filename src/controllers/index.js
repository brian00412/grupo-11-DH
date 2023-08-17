const path = require('path')


const homecontroller= (req, res) => {
    res.sendfile(path.resolve(__dirname, '../views/home.html'))
}

const registercontroller= (req, res) => {
    res.sendfile(path.resolve(__dirname, '../views/register.html'))
}

const logincontroller= (req, res) => {
    res.sendfile(path.resolve(__dirname, '../views/login.html'))
}

const carritodecompras= (req, res) => {
    res.sendfile(path.resolve(__dirname, '../views/logincarrito.html'))
}

module.exports = {
    homecontroller ,
    registercontroller ,
    logincontroller ,
    carritodecompras
}