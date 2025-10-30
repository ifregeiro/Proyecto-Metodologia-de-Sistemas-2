import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'webfarmaciadb'
}

const conection = mysql.createConnection(config);

export class FarmaciaModel {
    static async getAll ({ categoria }) {
        const result = await createConnection.query(
            'SELECT * FROM producto;'
        )
        console.log(result);
    }
    static async getById ({id_prod}){

    }}