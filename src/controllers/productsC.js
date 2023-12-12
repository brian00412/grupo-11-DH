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
            res.redirect('/products');
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
        let imgProduct;

        const validationEdit = validationResult(req);

        if (!validationEdit.isEmpty()) {
            db.Product.findByPk(id, { raw: true })
                .then(function (product) {
                    imgProduct = product.imagen
                    return res.render('products/editarProducto', {
                        errors: validationEdit.mapped(),
                        product: product
                    })
                })

        } else {


            db.Product.update({
                nombre: req.body.name,
                descripcion: req.body.description,
                categoria: req.body.category,
                precio: req.body.price,
                descuento: req.body.descuento,
                color: req.body.color,
                imagen: req.file ? req.file.filename : imgProduct,
            },
                {
                    where: { id: id }
                })
                .then(product => {
                    res.redirect('/');
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).send('error');
                })

        }
    },

    eliminar: (req, res) => {
        let id = req.params.id;
        db.Product.destroy(
            {
                where: { id: id }
            }
        ).then(product => {
            res.redirect('/products')
        })
            .catch(error => {
                console.log(error);
                res.status(500).send('error');
            })
    },

    buscardor: (req, res) => {
        let name = req.body.buscar
        db.Product.findAll({
            raw: true,
            where: { nombre: { [db.Sequelize.Op.like]: `%${name}%` } }
        })
            .then((products) => {
                res.render("products/products", { products })
            })
            .catch(error => {
                console.log(name)
                console.log(error);
                res.status(500).send('error');
            })
    },

    datosProds: async (req, res) => {
        const Product = await db.Product.findAll({ raw: true })

        const response = {
            meta: {
                status: 200,
                total: Product.length,
                url: '/prodt'
            },
            data: Product
        }
        return res.status(200).json(response)
    }

}

module.exports = productController;