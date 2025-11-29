import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const SubCategoria = sequelize.define('sub_categoria', {
    id_subcat: {
        type: DateTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})