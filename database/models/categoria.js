module.exports = function (sequelize, DataTypes) {

    const rows = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        categoria: {
            type: DataTypes.STRING,
        },
    }
    const config = {
        tableName: 'categoria',
        timestamps: false,
    }

    const Categoria = sequelize.define('Categoria', rows, config);

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Product, {
            foreignKey: 'categoria_id',
            as: 'productos'
        });
    }
    return Categoria;
}