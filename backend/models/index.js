const { Sequelize } = require('sequelize');

const producto = new Sequelize('nombre_db', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306, // Puerto por defecto de MySQL
  pool: {
    max: 5,       // Máximo número de conexiones en el pool
    min: 0,       // Mínimo número de conexiones en el pool
    acquire: 30000, // Tiempo máximo (ms) para adquirir una conexión
    idle: 10000   // Tiempo máximo (ms) que una conexión puede estar inactiva
  },
  timezone: '-03:00' // Establecer zona horaria UTC
});

// Testeo de conexión
async function testMySQLConnection() {
  try {
    await producto.authenticate();
    console.log('Conexión a MySQL establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar con MySQL:', error);
  }
}

testMySQLConnection();