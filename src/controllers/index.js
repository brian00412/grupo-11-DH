const path = require('path')
const fs = require('fs')
const productspath = path.join(__dirname, "../data/productos.json")
const products = JSON.parse(fs.readFileSync(productspath))




const homecontroller= (req, res) => {
   res.render('home',{products})
}

const registercontroller= (req, res) => {
    res.render('register')
}

const logincontroller= (req, res) => {
    res.render('login')
}

const productCartcontroller= (req, res) => {
    res.render('productCart')
}

module.exports = {
    homecontroller ,
    registercontroller ,
    logincontroller ,
    productCartcontroller,
}
