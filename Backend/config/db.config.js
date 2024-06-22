require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('typeMaster', 'root', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port:3306,
    dialectOptions: {
        connectTimeout: 86400,
      },
  });

  module.exports={sequelize};