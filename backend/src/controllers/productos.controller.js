import { Categoria } from '../models/Categoria.model.js'
import { SubCategoria } from '../models/SubCategoria.model.js'
import { Producto } from '../models/Producto.model.js'

export class ProductoController {
    static async getAllProductos(req, res, next) {
        try{
            const productos = await Producto.findAll({ 
                include: [Categoria, SubCategoria] 
            });
            res.status(200).json(productos)
        } catch(error) {
            next(error)
        }
        
    }
    static async getProductoById (req, res, next) {
        try {
            const { id } = req.params;
            const producto = await Producto.findByPk( id, {
                include: [Categoria, SubCategoria]
            });
            if (producto) {
                return res.status(200).json(producto)
            }
            res.status(404).json({ message: 'Producto no encontrado'})
        } catch (error) {
            next(error)
        }
        
    }

    // Función para obtener productos por categoría
    static async getProductosPorCategoria (req, res, next) {
        try {
            const { id_cat }  = req.params;
            const productos = await Producto.findAll({ 
                where: {id_cat},
                include: [Categoria, SubCategoria] });
            if (productos.length > 0){
                res.status(200).json(productos);
            }
            res.status(404).json({ message: 'Categoría vacia'});
        } catch (error){
            next(error);
        }
    }
    // Función para crear nuevo producto
    static async createProducto (req, res, next) {
        try {
            // Solicita los datos del producto
            const {nombre, descripcion, precio, stock, id_cat, id_subcat}= req.body;

            // Crea el producto
            const newProduct = await Producto.create({
                nombre,
                descripcion,
                precio, 
                stock,
                id_cat,
                id_subcat
            });
        
            // Devuelve el estado de operación exitosa
            // con el nuevo producto
            res.status(201).json(newProduct)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Ocurrió un error al momento de crear el producto "});
        }
        
        
        
    }

    // Función para eliminar un producto
    static async deleteProducto (req, res, next) {
        try {
            const { id } = req.params;
            const result = await Producto.destroy({ 
                where: { id_prod: id}
            });

            // Lanza un error si no encuentra el producto
            if (!result){
                return res.status(404).json({message: 'Producto no encontrado'})
            }

            // Si no hubo ningún error
            return res.status(200).json({message: 'Producto eliminado'})
        } catch (error) {
            next(error)
        }
        
    }

    // Actualizar productos
    static async updateProducto (req, res, next) {
        try {
            const { id } = req.params;
            const [updateProducto] = await Producto.update( req.body, {
                where: { id_prod: id}
            });

            if (!updateProducto) {
                return res.status(404).json({ message: "No se encontró el producto" })
            }
            const productoActualizado = await Producto.findByPk(id);
            return res.status(200).json(productoActualizado);
        } catch (error) {
            next(error)
        }
        
    }
}
