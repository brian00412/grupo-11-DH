const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('grupo_11_datos', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
});


const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true


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

    },
    delet: {
        type: DataTypes.BOOLEAN,

    }
}
)

sequelize.sync()
    .then(() => {
        console.log('Estoy Conectado Soy Product :O');
    })
    .catch((error) => {
        console.error('Algo fallo con los datos :(', error);
    });


module.exports = Product;
