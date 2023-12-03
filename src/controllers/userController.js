const path = require('path')
const fs = require('fs')
const bcrypt = require("bcryptjs")
// const compare = require("bcrypt")
// const userspath = path.join(__dirname, "../data/users.json")
// const users = JSON.parse(fs.readFileSync(userspath))
const productspath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productspath));
const db = require('../../database/models');


const { validationResult } = require('express-validator');
const { raw } = require('mysql2');
///////////////// zona de pruebas //////////////////


// db.User.findAll( {raw: true})
// .then ((datos) => {
//     console.log ('soy yo datos users')
//      console.log(datos)
//     //  const datosRay = datos.map(function (user){
//     //  })
//     //  console.log(datos) 
// }) ;



////////////////////////////////////////////////////

const usersController = {
    StoreUser : (req, res) => {
        let error = validationResult(req);
        res.send(error)
    if (!error.isEmpty()){
        return res.render("register",{mensajesDeError : error.mapped()})
    } 
},

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
            image: req.file ? req.file.filename : 'Sinfoto.jpg', 
        };

        const validation = validationResult(req);

        if (!validation.isEmpty()) {
        console.log(validation.mapped())
            res.render ('register',{
                errors : validation.mapped()})
            return;};

        

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
        
        const gmail = req.body.email
        const contra = req.body.password
        let userperfil = false

        const validationuser = validationResult(req);

        if (!validationuser.isEmpty()) {
        console.log(validationuser.mapped())
            res.render ('login',{
                errors : validationuser.mapped()})
            return;};
////       terminar usuario 
        for (let i = 0; i < datouser.length; i++) {
            if (datouser[i].email === gmail) {
            } if (comparedatouser[i].password === contra) {
                userperfil = true;
                break;
            } 
                
            
        }
        // if (userperfil){
        //     res.redirect("home");
        // }
        // else{
        //     res.send("el usurio no existe")
        // }
    }



}




module.exports = usersController;
