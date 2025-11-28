import mysql from 'mysql2/promise';
import dotenv from 'dotenv';


dotenv.config()

const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    port: process.env.DB_PORT || 3306,
    password: process.env.DB_PASSWORD || '7220_leobarT',
    database: process.env.DB_NAME || 'webfarmaciadb'
}

export async function obtenerCategorias(){
    const[rows] = await config.execute("SELECT nombre FROM categoria");
    return rows.map(r => r.nombre)
}

export async function obtenerSubCategorias(){
    const[rows] = await config.execute("SELECT nombre FROM sub_categoria");
    return rows.map(r => r.nombre)
}

export const connection = await mysql.createConnection(config);