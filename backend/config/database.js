const mysql = require ('mysql2');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_db', 'usuario', 'contraseña',{
    host: 'localhost',
    dialect: 'mysql',

    port: 3306,
    pool: {
        max: 5,  // Número máximo de conexiones en el pool
        min: 0,  // Número mínimo de conexiones en el pool
        acquire: 30000,  // Tiempo máximo (ms)  para adquirir una conexión*
        idle: 10000 // Tiempo máximo (ms) que una conexión puede estar inactiva
    },
    timezone: '-03:00' // Se establece la zona horaria UTC
})

// export const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

