const fs = require("fs");
const path = require("path");
const productspath = path.join(__dirname, "../data/productos.json");
const productsCart = path.join(__dirname, "../data/productosCart.json");
const products = JSON.parse(fs.readFileSync(productspath));
const productos = JSON.parse(fs.readFileSync(productsCart));

const carrito = (req, res) => {
    let id = req.params.id;
    if(id){
       let producto = products.find(p => p.id == id);

    productos.push(producto);
    fs.writeFileSync(productsCart, JSON.stringify(productos)); 
    }
    
    
    res.render('productCart', { productos })
}

module.exports = carrito;