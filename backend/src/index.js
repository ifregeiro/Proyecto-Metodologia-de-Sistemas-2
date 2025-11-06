// Dependencias principales
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db'); // conexión a MySQL

// Configuración inicial
const app = express();
const PORT = process.env.PORT || 5000;

//Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // CORS dinámico
  credentials: true
}));
app.use(express.json());

//Rutas
const productosRoutes = require('./src/routes/productos');
app.use('/api/productos', productosRoutes);

// Ruta base para probar conexión
app.get('/', (req, res) => {
  res.json({ message: 'API Farmacia Carabelli funcionando correctamente ✅' });
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
