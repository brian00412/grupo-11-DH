const path = require('path')
const fs = require('fs')
const userspath = path.join(__dirname, "../data/users.json")
const users = JSON.parse(fs.readFileSync(userspath))

const productspath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productspath));


const getProducts = (req, res) => {
    res.status(200).json(usuario)
}

const usersController= {
   
    crear: (req, res) => {
        res.render("register")
    },

    create: (req, res) => {
        console.log(req.file);
        let newUser = {
            id: Date.now(),
            firstName: req.body.nombre,
            lastName: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
            category: req.body.categoria,
            image: req.file.filename
        };

        users.push(newUser);
        fs.writeFileSync(userspath, JSON.stringify(users));
        res.render("home",{products})

    },
    
}

const homecontroller= (req, res) => {
   res.render('home',{products})
}

const logincontroller= (req, res) => {
    res.render('login')
}

const productCartcontroller= (req, res) => {
    res.render('productCart')
}

module.exports = {
    homecontroller ,
    logincontroller ,
    productCartcontroller,
    usersController
}
