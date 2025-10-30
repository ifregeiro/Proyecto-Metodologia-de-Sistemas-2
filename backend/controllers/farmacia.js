import { FarmaciaModel } from "../models/farmaciaDB";
import { validateProduct } from "../schemas/farmacia";
export class FarmaciaController {
    static async getAll (req, res){
        const { categoria } = req.query
        const productos = await FarmaciaModel.getAll({ categoria })
        res.json(productos)
    }
    static async getById (req, res) {
        const { id_prod } = req.params
        const producto = await FarmaciaModel.getById({ id_prod })
        if (producto) 
            return res.json(producto)
        res.status(404).json({ message: 'Producto no encontrado'})
    }
    // Función para crear nuevo producto
    static async create (req, res) {
        const result = validateProduct(req.body)
        
        // Si el producto ingresado tiene algún fallo
        // se lanza un error
        if (!result.success) {

            return res.status(400).json({ error: JSON.parse(result.error.message)})
        }
        
        // Crea el producto
        const newProduct = await FarmaciaModel.create({ input: result.data })
        
        // Devuelve el estado de operación exitosa
        // con el nuevo producto
        res.status(201).json(newProduct)
    }

    // Función para eliminar un producto
    static async delete (req, res){
        const { id } = req.params
        const result = await FarmaciaModel.delete({ id })

        // Lanza un error si no encuentra el producto
        if (result === false){
            return res.status(400).json({message: 'Producto no encontrado'})
        }

        // Si no hubo ningún error
        return res.json({message: 'Producto eliminado'})
    }
}
