const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('grupo_11_datos', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
});

const users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey : true

    },
    firstName: {
        type: DataTypes.STRING,

    },
    lastName: {
        type: DataTypes.TEXT,

    },
    email: {
        type: DataTypes.STRING,

    },
    password: {
        type: DataTypes.INTEGER,

    },
    category: {
        type: DataTypes.STRING,

    },
    image: {
        type: DataTypes.STRING,

    }
}
)

sequelize.sync()
    .then(() => {
        console.log('Estoy Conectado, Soy users :O');
    })
    .catch((error) => {
        console.error('Algo fallo con los datos :(', error);
    });

module.exports = users;
