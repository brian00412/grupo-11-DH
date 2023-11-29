
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

        },
        delet: {
            type: DataTypes.BOOLEAN,
        }
    }
    const config = {
        tableName: 'producto',
        timestamps: false,
    }
    
    const product = sequelize.define('Product',rows,config);

    return product;
}