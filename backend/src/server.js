import express, { json } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import 'dotenv/config';
import { corsMiddleware } from './middlewares/cors.js';
import { createRutaProducto } from './routes/productos.routes.js';


export const createServer = ({farmaciaModel}) => {
    const app = express();
    app.use(json());
    app.use(helmet());
    app.use(corsMiddleware());
    app.use(rateLimit({
        windowMs: 60 * 1000, // 1 minuto
        max: 100 
    }));
    
    // Ruta de los productos
    app.use('/productos', createRutaProducto({ farmaciaModel }));

    // Healt del servidor
    app.get('/health', (req, res) => {
        res.status(200).json({
            status: 'OK',
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        });
    });

    app.use((err, req, res, next) => { 
    console.error('Error:', err);
    res.status(500).json({error: 'Error interno del servidor.'});
    });
    return app;
}
