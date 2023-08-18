const productController = {
    detalles: (req, res) => {
        res.render("products/productDetail");
    },
    crear: (req, res) => {
        res.render("products/crearProduct")
    },
    editar: (req, res) => {
        res.render("products/editarProducto")
    },
    create: (req, res) => {
        let nuevoProducto = {
            nombre: req.body.name,
            descripcion: req.body.description,
            imagen: req.body.image,
            categoria: req.body.category,
            color: req.body.color,
            precio: req.body.price,
        }
    }
}

module.exports = productController;