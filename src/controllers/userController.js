const path = require('path')
const fs = require('fs')
const bcrypt = require("bcryptjs")
// const compare = require("bcrypt")
// const userspath = path.join(__dirname, "../data/users.json")
// const users = JSON.parse(fs.readFileSync(userspath))
// const productspath = path.join(__dirname, "../data/productos.json");
// const products = JSON.parse(fs.readFileSync(productspath));
const db = require('../../database/models');
const { validationResult } = require('express-validator');
const { raw } = require('mysql2');
const { url } = require('inspector');


const usersController = {
    StoreUser: (req, res) => {
        let error = validationResult(req);
        res.send(error)
        if (!error.isEmpty()) {
            return res.render("register", { mensajesDeError: error.mapped() })
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
            res.render('register', {
                errors: validation.mapped()
            })
            return;
        };
        try {
            await db.User.create(newUser)
            console.log();
            res.redirect("/login");
        } catch (error) {
            console.log(error);
            res.status(500).send('error');
        }

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
            res.render('login', {
                errors: validationuser.mapped()
            })
            return;
        };
        ////       terminar usuario
        db.User.findAll({ raw: true })

            .then((User) => {
                User.forEach((usuarios) => {
                    console.log(usuarios)
                    if (usuarios.email == gmail) {
                        const comprador = bcrypt.compareSync(contra, usuarios.password)
                        if (comprador == true) {
                            userperfil = true
                        }
                    }
                })
                console.log(userperfil)
                if (userperfil) {
                    res.redirect("/");
                }
                else {
                    res.send("el usurio no existe")
                }
            });
    },
    datosUser: async (req, res) => {
        const users = await db.User.findAll({
            
        });
        let data = [];

        users.forEach(user => {
            const userData = {
                id: user.id,
                firstName: user.firstName,
                email: user.email,
                detalle: `http://localhost:8001/api/users/${user.id}`
            }

            data.push(userData);
        });
        const Users = await db.User.findAll({ raw: true })

        const response = {
            meta: {
                status: 200,
                total: Users.length,
                url: '/users'
            },
            data: data
        }
        return res.status(200).json(response)
    },
    detail: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await db.User.findByPk(id, { attributes: { exclude: ['password', 'category'] } });

            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            const userInfo = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                image: user.image
            };

            const response = {
                user: userInfo,
                imageURL: `http://localhost:8001/images/users/${user.image}`
            };

            return res.status(200).json(response);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    },
}




// let user =  User.findOne({
//     where: {email:req.body.email}
// })









module.exports = usersController;
