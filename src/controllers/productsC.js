const fs = require("fs");
const path = require("path");

const productspath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productspath));

const productController = {
    listado: (req , res) => {
            res.render("products/products",{products})
          },

    detalles: (req, res) => {
        let id = req.params.id;
        let product = products.find(p => p.id == id)
        res.render("products/productDetail", { product });
    },

    crear: (req, res) => {
        res.render("products/crearProduct")
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
            delete: false,
        };

        products.push(nuevoProducto);
        fs.writeFileSync(productspath, JSON.stringify(products));
        res.render("home",{products})
    },

    editarForm: (req, res) => {
        let id = req.params.id;
        let product = products.find(p => p.id == id)
        res.render("products/editarProducto", { product })
    },

    editar: (req, res) => {
        let id = req.params.id -1;
        let product = products.find(p => p.id-1== id);
        let imagen;
        if(req.file){
            imagen = req.file.filename
        } else {
            imagen = product.imagen
        }
        let productoEditado = {
            id: req.params.id,
            nombre: req.body.name,
            descripcion: req.body.description.split(","),
            categoria: req.body.category,
            precio: req.body.price,
            descuento: req.body.descuento,
            color: req.body.color,
            imagen: imagen,
            delete: false,
        }

        products.splice(id, 1, productoEditado);
        fs.writeFileSync(productspath, JSON.stringify(products));
        res.render("home",{products})
    },

    eliminar: (req,res)=>{
        let id = req.params.id;
        let product = products.find(p => p.id == id);
        product.delete = true;
        fs.writeFileSync(productspath, JSON.stringify(products));
        res.render("home",{products})
    }

}

module.exports = productController;