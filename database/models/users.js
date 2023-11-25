const { Sequelize, sequelize } = require(".");
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = (Sequelize, DataTypes) =>  {
    const users = sequelize.define( 'users' , {
        id : {
            type: DataTypes.INTEGER
           
        },
        firstName : {
            type: DataTypes.STRING,
            
        },
        lastName : {
            type: DataTypes.TEXT,
            
        },
        email : {
            type: DataTypes.STRING,
            
        },
        password : {
            type: DataTypes.INTEGER,
            
        },
        category : {
            type: DataTypes.STRING,
            
        },
        image : {
            type: DataTypes.STRING,
            
        }
    }
    )
}
users.sync();

module.exports = users;
