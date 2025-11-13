import { corsMiddleware } from './middlewares/cors.js';
import { createRutaProducto } from './routes/productos.routes.js';
import express, { json } from 'express';
import 'dotenv/config';

export const createServer = ({farmaciaModel}) => {
    const app = express();
    app.use(json());
    app.use(corsMiddleware());
    
    app.use('/productos', createRutaProducto({ farmaciaModel }));
    
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`)
    })
}
