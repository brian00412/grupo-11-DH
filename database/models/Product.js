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
        categoria_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
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

    const Product = sequelize.define('Product', rows, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Categoria, {
            foreignKey: 'categoria_id',
            as: 'categoria'
        });
    }

    return Product;
}