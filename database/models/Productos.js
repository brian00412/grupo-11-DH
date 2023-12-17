const generos = require('../models/categoria')


module.exports = function (sequelize, DataTypes) {

    const rows = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
        },
        descripcion: {
            type: DataTypes.TEXT,
        },
        categoria: {
            type: DataTypes.STRING,
        },
        precio: {
            type: DataTypes.INTEGER,
        },
        descuento: {
            type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING,
        },
        imagen: {
            type: DataTypes.STRING,

        }
    }
    const config = {
        tableName: 'producto',
        timestamps: false,
    }

    const product = sequelize.define('Product', rows, config);
    // Agregar asociaciones a la tabla de Products
    generos.associate = function (models) {
        product.belongsTo(generos, {
            foreignKey: 'generoID',
            as: 'generos'
          });
    }

    return product;
}