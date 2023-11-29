const path = require('path')
const fs = require('fs')
const bcrypt = require("bcryptjs")
// const userspath = path.join(__dirname, "../data/users.json")
// const users = JSON.parse(fs.readFileSync(userspath))
const productspath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productspath));
const db = require('../../database/models');



// controlador de crear cuenta

const usersController = {
    crear: (req, res) => {
        res.render("register")
    },

    create: async (req, res) => {
        console.log(req.file);

        let newUser = {
            firstName: req.body.nombre,
            lastName: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            category: req.body.categoria,
            image: req.file.filename
        };

        try {
            await db.User.create(newUser) 
            console.log();
            res.render('home', { products });
         } catch (error) {
            console.log(error);
            res.status(500).send('error');
         }   
        // console.log(newUser);
        // users.push(newUser);
        // fs.writeFileSync(userspath, JSON.stringify(users));
        // res.render("home", { products })

    },


    // Login controller

    logincontroller: (req, res) => {
        res.render('login')

    },

    loginvalidar: (req, res) => {
        const datouser = User
        const gmail = req.body.email
        const contra = req.body.password
        let userperfil = false

        for (let i = 0; i < datouser.length; i++) {
            if (datouser[i].email === gmail) {
            } if (datouser[i].password === contra) {
                userperfil = true;
                break;
            }
        }
        if (userperfil){
            res.redirect("/");
        }
        else{
            res.send("el usurio no existe")
        }
    }



}




module.exports = usersController;
