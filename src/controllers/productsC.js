const productController = {
    detalles: (req, res) => {
        res.render("productDetail");
    },
    crear: (req, res) => {
        res.render("crearProduct")
    },
    editar: (req, res) => {
        res.render("editarProducto")
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