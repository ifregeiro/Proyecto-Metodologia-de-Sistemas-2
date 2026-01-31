import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Categoria = sequelize.define("categoria", {
  id_cat: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
