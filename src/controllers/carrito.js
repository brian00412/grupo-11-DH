const fs = require("fs");
const path = require("path");
const productsCart = path.join(__dirname, "../data/productosCart.json");
const productos = JSON.parse(fs.readFileSync(productsCart));
const db = require('../../database/models');

const carrito = {
    ver: (req, res) => {
        res.render('productCart', { productos })
    },
    agregar: (req, res) => {
        let id = req.params.id;
        db.Product.findByPk(id, { raw: true })
            .then(product => {
                productos.push(product);
                fs.writeFileSync(productsCart, JSON.stringify(productos));
                res.redirect('/productCart')
            })
            .catch(error => {
                console.log(error);
                res.status(500).send('error');
            })

    }

}

module.exports = carrito;