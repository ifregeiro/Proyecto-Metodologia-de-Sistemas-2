import { corsMiddleware } from './middlewares/cors.js';
import { createRutaProducto } from './routes/productos.routes.js';
import express, { json } from 'express';
import 'dotenv/config';

export const createServer = ({farmaciaModel}) => {
    const app = express();
    app.use(json());
    app.use(corsMiddleware());
    
    app.use('/api/v1/productos', createRutaProducto({ farmaciaModel }));

    app.use((err, req, res, next) => { 
    console.error('Error:', err);
    res.status(500).json({error: 'Error interno del servidor.'});
    });
    return app;
}
