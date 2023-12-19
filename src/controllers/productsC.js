const fs = require("fs");
const path = require("path");
const productspath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productspath));
const db = require('../../database/models');
const { validationResult } = require('express-validator');
const { raw } = require('mysql2');


const productController = {
    listado: (req, res) => {
        db.Product.findAll({
            raw: true,
            include: [{ association: "categoria" }]
        })
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
        db.Product.findByPk(id, {
            raw: true,
            include: [{ association: "categoria" }]
        })
            .then(product => {
                console.log(product.categoria)
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
            categoria_id: req.body.category,
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
        db.Product.findByPk(id, {
            raw: true,
            include: [{ association: "categoria" }]
        })
            .then(product => {
                console.log(product)
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
                categoria_id: req.body.category,
                precio: req.body.price,
                descuento: req.body.descuento,
                color: req.body.color,
                imagen: req.file ? req.file.filename : imgProduct,
            },
                {
                    where: { id: id }
                })
                .then(product => {
                    res.redirect('/products');
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
        const Product = await db.Product.findAll({
            // raw: true,
            include: [{ association: "categoria" }]
        })
        let data = []
        Product.forEach(product => {
            const producto = {
                id: product.id,
                nombre: product.nombre,
                descripcion: product.descripcion.split(","),
                categoria: product.categoria.categoria,
                detalle: `http://localhost:8001/api/products/${product.id}`
            }
            data.push(producto)
        })

        const response = {
            meta: {
                status: 200,
                total: Product.length,
                totalPorCategoria: {
                    Electrodomesticos: Product.filter(producto => { return producto.categoria_id == 1 }).length,
                    Gamer: Product.filter(producto => { return producto.categoria_id == 2 }).length
                }
            },
            data: data
        }
        return res.status(200).json(response)
    },
    detail: async (req, res) => {
        let id = req.params.id;
        let product = await db.Product.findByPk(id, {
            include: [{ association: "categoria" }]
        })
        const producto = {
            id: product.id,
            nombre: product.nombre,
            descripcion: product.descripcion.split(","),
            categoria: product.categoria.categoria,
            precio: product.precio,
            descuento: product.descuento,
            color: product.color,
            imagen: product.imagen
        }

        const response = {
            producto: producto,
            categoria: product.categoria,
            URL: `http://localhost:8001/images/productos/${product.imagen}`
        }

        return res.status(200).json(response)
    },

}

module.exports = productController;