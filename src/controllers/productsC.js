const fs = require("fs");
const path = require("path");
const productspath = path.join(__dirname, "../data/productos.json");
const products = JSON.parse(fs.readFileSync(productspath));
const db = require('../../database/models');



const productController = {
    listado: (req , res) => {
            db.Product.findAll()
            .then((products)=>{
            return res.render("products/products", {products})})
          },

    detalles: (req, res) => {
        let id = req.params.id;
        let product = products.find(p => p.id == id)
        res.render("products/productDetail", { product });
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
            imagen: req.file.filename,
        };
        
        try {
         await  db.Product.create(nuevoProducto) 
            res.render('home', { products });
            console.log ('llego el dato')
         } catch (error) {
            console.log(error);
            res.status(500).send('error');
         }  

        // products.push(nuevoProducto);
        // fs.writeFileSync(productspath, JSON.stringify(products));
        // res.render("home",{products})
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