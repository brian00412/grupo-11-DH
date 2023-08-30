const fs = require("fs");
const path = require("path");

const productspath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productspath));

const productController = {
    detalles: (req, res) => {
        let id = req.params.id;
        let product = products.find(p => p.id == id)
        res.render("products/productDetail", {product});
    },
    crear: (req, res) => {
        res.render("products/crearProduct")
    },
    editar: (req, res) => {
        res.render("products/editarProducto")
    },
    create: (req, res) => {
        console.log(req.file);
        let nuevoProducto = {
            id: Date.now(),
            nombre: req.body.name,
            descripcion: req.body.description.split(","),
            categoria: req.body.category,
            precio: req.body.price,
            descuento: req.body.descuento,
            color: req.body.color,
            imagen: req.file.filename,
        };

        products.push(nuevoProducto);
        fs.writeFileSync(productspath, JSON.stringify(products));
        res.redirect("/")
    }
}

module.exports = productController;