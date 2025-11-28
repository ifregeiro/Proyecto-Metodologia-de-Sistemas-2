import cors from 'cors'

const ACCEPTED_ORIGINS = [
    'http://localhost:8080',
    'http://localhost:1234',
    'https://farmaciacarabelli.com.ar',

]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {

        if (!origin) {
            return callback(null, true);
        }
        const normalizado = origin.toLowerCase();

        if (acceptedOrigins.includes(normalizado)) {
            return callback(null, true)
        }
        
        const permitirFarmacia = /\.farmaciacarabelli\.com\.ar$/;
        if (permitirFarmacia.test(normalizado)) {
            return callback(null, true);
        }

        console.warn(`CORS BLOCKED: ${origin}`);
        return callback(new Error('Not allowed by CORS'))
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
});