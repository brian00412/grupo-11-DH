const productController = {
    detalles: (req, res) => {
        res.render("productDetail");
    },
    crear: (req, res)=> {
        res.render("crearProduct")
    }
}

module.exports = productController;