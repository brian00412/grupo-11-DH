const path = require('path')
const fs = require('fs')
const productspath = path.join(__dirname, "../data/productos.json")
const products = JSON.parse(fs.readFileSync(productspath))


const getProducts = (req, res) => {
    res.status(200).json(usuario)
}

const personasController = {
   
    crear: (req, res) => {
        res.render("register")
    },

    create: (req, res) => {
        console.log(req.file);
        let nuevopersonas = {
            id: Date.now(),
            Nombreyapellido: req.body.nombreYapellido,
            Nombredeusuari: req.body.nombre_usuario,
            Cumpleaño: req.body.Cumpleaño,
            foto_usuario: req.body.foto_usuario,
            password: req.body.password,
            
        };

        usuario.push(nuevopersona);
        fs.writeFileSync(productspath, JSON.stringify(usuario));
        res.redirect("/")

    },
    
}

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
