const path = require('path')


const homecontroller= (req, res) => {
   res.render('home')
}

const registercontroller= (req, res) => {
    res.render('reg')
}

const logincontroller= (req, res) => {
    res.sendfile(path.resolve(__dirname, '../views/login.html'))
}

const productCartcontroller= (req, res) => {
    res.sendfile(path.resolve(__dirname, '../views/productCart.html'))
}

module.exports = {
    homecontroller ,
    registercontroller ,
    logincontroller ,
    productCartcontroller,
}
