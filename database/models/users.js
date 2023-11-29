const config = require("../config/config");

module.exports = function (sequelize, DataTypes) {
    const rows = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true

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
    const config = {
        tableName: 'users',
        timestamps: false ,
    }
    const users = sequelize.define('User', rows,config)

    return users
}
    
