const productController = {
    detalles: (req, res) => {
        res.render("productDetail");
    },
    crear: (req, res) => {
        res.render("crearProduct")
    },
    editar: (req, res) => {
        res.render("editarProducto")
    }
}

module.exports = productController;