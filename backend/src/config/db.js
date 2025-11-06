const mysql = require('mysql2');
require('dotenv').config(); //Aseguramos que cargue las variables del .env

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306, //Por si el puerto cambia
});

//Verificación de conexion
connection.getConnection((err, conn) => {
  if (err) {
    console.error('❌ Error al conectar con la base de datos:', err.message);
  } else {
    console.log('✅ Conexión a la base de datos establecida correctamente.');
    conn.release();
  }
});

module.exports = connection;
