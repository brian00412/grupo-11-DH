const generos = require('../models/Productos')
module.exports = function (sequelize, DataTypes) {

    const rows = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        categoriID: {
            type: DataTypes.STRING,
        },
    }
    const config = {
        tableName: 'categoria',
        timestamps: false,
    }
    
    const Categoria = sequelize.define('Categoria',rows,config);

    generos.associate = function (models) {
        product.belongsTo(generos, {
            foreignKey: 'generoID',
            as: 'generos'
          });
}
    return Categoria;
}