const path = require('path')
const fs = require('fs')
const bcrypt = require("bcryptjs")
const userspath = path.join(__dirname, "../data/users.json")
const users = JSON.parse(fs.readFileSync(userspath))

const productspath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productspath));


const getProducts = (req, res) => {
    res.status(200).json(usuario)
}


const homecontroller= (req, res) => {
   res.render('home',{products})
}

const productCartcontroller= (req, res) => {
    res.render('productCart')
}
const perfilesController= (req, res) => {
    res.render('users/perfiles')
}

module.exports = {
    homecontroller ,
    productCartcontroller,
    perfilesController
}
