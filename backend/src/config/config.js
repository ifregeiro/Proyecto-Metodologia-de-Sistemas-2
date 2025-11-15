import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '7220_leobart',
    database: 'webfarmaciadb'
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