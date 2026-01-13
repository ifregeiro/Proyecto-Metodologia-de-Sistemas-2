import dotenv from 'dotenv';

dotenv.config()

const config = {
    development: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        port: process.env.DB_PORT || 3306,
        password: process.env.DB_PASSWORD || 'Nachoo4488',
        database: process.env.DB_NAME || 'webfarmaciadb',
        dialect: "mysql"
    },

    production: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        dialect: "mysql"
    }
}

export default config;
