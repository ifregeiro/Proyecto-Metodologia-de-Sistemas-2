import { ConnectionAcquireTimeoutError, DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Categoria } from './Categoria.model.js'
import { SubCategoria } from './SubCategoria.model.js'

export const Producto = sequelize.define('producto', {
    id_prod: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    descripcion: DataTypes.TEXT,
    precio: {
        types: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        types: DataTypes.INTEGER,
        allowNull: false
    }
})

// Relaciones con Categoria
Producto.belongsTo(Categoria, {foreignKey: 'id_cat'})
Categoria.hasMany(Producto, {foreignKey: 'id_cat'})

// Relaciones con SubCategoria
Producto.belongsTo(SubCategoria, { foreignKey: 'id_subcat'})
SubCategoria.hasMany(Producto, {foreignKey: 'id_subcat'})