import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'webfarmaciadb'
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

const conection = mysql.createConnection(config);

export class FarmaciaModel {
    static async getAll ({ categoria }) {
        console.log('getAll')
        
        if (categoria){
            const loweCaseCategory = genre.toLowerCase()
            
            const [categorias] = await connection.query(
                'SELECT id_cat, nombre FROM categoria WHERE LOWER(nombre) = ?;',
                [lowerCaseCategory]
            )
        // Si no se encuentran categorias devuelve el arreglo vacío
            if(categorias.length === 0) return []

            const [{ id_cat }] = categorias

            return []
        }

        const [productos] = await connectionString.query(
            'SELECT id_prod, nombre, descripcion, precio, stock FROM producto;'
        )
        
        return productos
    }
    static async getById ({ id }){
        const [productos] = await connection.query(
            'SELECT id_prod, nombre, descripcion, precio, stock FROM producto WERE id = id_prod;',
            [id]
        )

        if (productos.length === 0)return null

        return movies[0]
    }

    static async create ({ input }) {
        const {
            categoria: categoriaInput,
            nombre,
            descripcion,
            precio,
            stock
        } = input

        try {
            (await conection).query(
                `INSERT INTO producto (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?);`,
                [nombre, descripcion, precio, stock]
            )
        } catch (e) {
            throw new Error('Error al crear producto')
        }
        const [productos] = await connection.query(
            `SELECT nombre, descripcion, precio, stock, id_prod FROM productos WHERE id = id_prod;`,

        )

        return productos[0]
    }

    static async delete ({ id }) {

    }
    static async update ({id, input}) {
        
    }
    //     const result = await createConnection.query(
    //         'SELECT * FROM producto;'
    //     )
    //     console.log(result);
    
    // static async getById ({id_prod}){

    // }
}