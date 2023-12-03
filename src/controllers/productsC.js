const fs = require("fs");
const path = require("path");
const productspath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productspath));
const db = require('../../database/models');
const { validationResult } = require('express-validator');
const { raw } = require('mysql2');


const productController = {
    listado: (req, res) => {
        db.Product.findAll({ raw: true })
            .then((products) => {
                return res.render("products/products", { products })
            })
            .catch(error => {
                console.log(error);
                res.status(500).send('error');
            })
    },

    detalles: (req, res) => {
        let id = req.params.id;
        db.Product.findByPk(id, { raw: true })
            .then(product => {
                res.render("products/productDetail", { product });
            })
            .catch(error => {
                console.log(error);
                res.status(500).send('error');
            })
    },

    crear: (req, res) => {
        res.render("products/crearProduct")
    },

    create: async (req, res) => {
        console.log(req.file);
        let nuevoProducto = {
            nombre: req.body.name,
            descripcion: req.body.description,
            categoria: req.body.category,
            precio: req.body.price,
            descuento: req.body.descuento,
            color: req.body.color,
            imagen: req.file ? req.file.filename : 'Productonoimg.png',
        };

        const validation = validationResult(req);

        if (!validation.isEmpty()) {
            console.log(validation.mapped())
            res.render('products/crearProduct', {
                errors: validation.mapped()
            })
            return;
        };

        try {
            await db.Product.create(nuevoProducto)
            res.render('home', { products });
            console.log('llego el dato')
        } catch (error) {
            console.log(error);
            res.status(500).send('error');
        }
    },

    editarForm: (req, res) => {
        let id = + req.params.id;
        db.Product.findByPk(id, { raw: true })
            .then(product => {
                res.render("products/editarProducto", { product })
            })
            .catch(error => {
                console.log(error);
                res.status(500).send('error');
            })


    },

    editar: (req, res) => {
        let id = + req.params.id;
        db.Product.update({
            nombre: req.body.name,
            descripcion: req.body.description,
            categoria: req.body.category,
            precio: req.body.price,
            descuento: req.body.descuento,
            color: req.body.color,
            imagen: req.file ? req.file.filename : 'Productonoimg.png',
        },
            {
                where: { id: id }
            })
            .then(product => {
                res.render('home', { products });
            })
            .catch(error => {
                console.log(error);
                res.status(500).send('error');
            })

        const validationEdit = validationResult(req);

        if (!validationEdit.isEmpty()) {
            console.log(validationEdit.mapped())
            res.render('products/editarProducto', {
                errors: validationEdit.mapped()
            })
            return;
        };
    },

    eliminar: (req, res) => {
        let id = req.params.id;
        let product = products.find(p => p.id == id);
        product.delete = true;
        fs.writeFileSync(productspath, JSON.stringify(products));
        res.render("home", { products })
    }

}

module.exports = productController;