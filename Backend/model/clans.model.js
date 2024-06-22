const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");



const Clan = sequelize.define('clans',{
    "clanName":{type:DataTypes.STRING,allowNull,unique:true},
})