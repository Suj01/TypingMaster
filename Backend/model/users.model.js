const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");

const User = sequelize.define(
  "users",
  {
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    isAdmin: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  },
  {
    timestamps: false,
  }
);

module.exports = { User };
