const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Importar rutas
const productosRoutes = require('./src/routes/productos');
app.use('/api/productos', productosRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
