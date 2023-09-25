const path = require('path')
const fs = require('fs')
const bcrypt = require("bcryptjs")
const userspath = path.join(__dirname, "../data/users.json")
const users = JSON.parse(fs.readFileSync(userspath))


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
            password: bcrypt.hashSync(req.body.password),
            category: req.body.categoria,
            image: req.file.filename
        };

        users.push(newUser);
        fs.writeFileSync(userspath, JSON.stringify(users));
        res.render("home",{products})

    },
    
}

const logincontroller= (req, res) => {
    res.render('login')
}

module.exports = {
    logincontroller ,
    usersController
}
