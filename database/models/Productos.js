const { Sequelize, sequelize } = require(".");
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (Sequelize, DataTypes) =>  {
    const Product = sequelize.define( 'Product' , {
        id : {
            type: DataTypes.INTEGER
           
        },
        nombre : {
            type: DataTypes.STRING,
            
        },
        descripcion : {
            type: DataTypes.TEXT,
            
        },
        categoria : {
            type: DataTypes.STRING,
            
        },
        precio : {
            type: DataTypes.INTEGER,
            
        },
        descuento : {
            type: DataTypes.STRING,
            
        },
        color : {
            type: DataTypes.STRING,
            
        },
        imagen : {
            type: DataTypes.STRING,
            
        },
        delet : {
            type: DataTypes.BOOLEAN,
            
        }
    }
    )
}
Product.sync();

module.exports = Product;
