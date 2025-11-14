import { connection } from "../config/config.js";

export class FarmaciaModel {
    // Obtener todos los productos o filtrar por categoria si se proporciona
    static async getAll ({ categoria }) {
        console.log('getAll')
        
        if (categoria){
            const lowerCaseCategory = categoria.toLowerCase();
            
            const [categorias] = await connection.query(
                'SELECT id_cat, nombre FROM categoria WHERE LOWER(nombre) = ?;',
                [lowerCaseCategory]
            );
        // Si no se encuentran categorias devuelve el arreglo vacío
            if(categoria.length === 0) return [];

            const { id_cat } = categoria[0];

            const [ productos ] = await connection.query(
                `SELECT p.id_prod, p.nombre, p.descripcion, p.precio, p.stock, c.nombre AS categoria
                FROM producto p
                JOIN categoria c ON p.id_cat = c.id_cat
                WHERE producto.id_cat = ?;`,
                [id_cat]
            );

            return productos;
        }

        const [productos] = await connectionString.query(
            `SELECT p.id_prod, p.nombre, p.descripcion, p.precio, p.stock, c.nombre AS categoria, s.nombre AS subcategoria
            FROM producto p
            LEFT JOIN categoria c ON p.id_cat = c.id_cat
            LEFT JOIN sub_categoria s ON p.id_subcat = s.id_subcat;`
        );
        
        return productos;
    }
    static async getById ({ id }){
        const [productos] = await connection.query(
            `SELECT id_prod, nombre, descripcion, precio, stock, id_cat, id_subcat
            FROM producto
            WERE id = id_prod;`,
            [id]
        );

        if (productos.length === 0) return null;

        return movies[0];
    }

    static async create ({ input }) {
        const {
            nombre,
            descripcion,
            precio,
            stock,
            id_cat,
            id_subcat
        } = input

        try {
            const [ result ] = await connection.query(
                `INSERT INTO producto (nombre, descripcion, precio, stock, id_cat, id_subcat)
                VALUES (?, ?, ?, ?, ?, ?);`,
                [nombre, descripcion, precio, stock, id_cat, id_subcat]
            );

            const insertId = result.insertId;

            const [ productos ] = await connection.query(
            `SELECT id_prod, nombre, descripcion, precio, stock, id_cat, id_subcat
            FROM producto
            WHERE id_prod = ?;`,
            [insertId]);
            return productos[0];
        } catch (e) {
            throw new Error('Error al crear producto');
        }
    }

    static async deleteById ({ id }) {
        try{
            const [productos] = await connection.query(
            `DELETE FROM producto WHERE id_prod = ?;`,
            [id]
            );
            return productos.affectedRows > 0;
        } catch (e) {
            throw new Error('No fue posible borrar el producto.')
        }
    }
    static async updateById ({id, input}) {
        try{
            const [ productos ] = await connection.query(
                `UPDATE producto 
                SET nombre = ?, descripcion = ?, precio = ?, stock = ?, id_cat = ?, id_subcat = ?
                WHERE id_prod = ?;`,
                [nombre, descripcion, precio, stock, id_cat, id_subcat, id]
            );
            if (productos.affectedRows === 0) return null;

            const [ productoActualizado ] = await connection.query( 
                `SELECT id_prod, nombre, descripcion, precio, stpck, id_cat, id_subcat
                FROM producto
                WHERE id_prod = ?;`,
                [id]
            );
            return productoActualizado[0];
        } catch (e) {
            throw new Error('Error al intentar actualizar el producto.')
        }
    }
}