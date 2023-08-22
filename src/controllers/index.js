const path = require('path')


const homecontroller= (req, res) => {
   res.render('home')
}

const registercontroller= (req, res) => {
    res.render('register')
}

const logincontroller= (req, res) => {
    res.render('login')
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
