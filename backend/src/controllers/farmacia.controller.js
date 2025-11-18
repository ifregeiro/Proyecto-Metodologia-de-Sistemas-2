import { validarProducto, validacionParcialProducto } from '../schemas/farmaciaSchema.js'

export class FarmaciaController {
    constructor ({ farmaciaModel }){
        this.farmaciaModel = farmaciaModel
    }
    getAll = async (req, res) => {
        const { categoria } = req.query
        const productos = await this.farmaciaModel.getAll({ categoria })
        res.json(productos)
    }
    getById = async (req, res) => {
        const { id } = req.params
        const producto = await this.farmaciaModel.getById({ id })
        if (producto) {
            return res.json(producto)
        }
        res.status(404).json({ message: 'Producto no encontrado'})
    }
    // Función para crear nuevo producto
    create = async (req, res) => {
        const result = await validarProducto(req.body)
        
        // Si el producto ingresado tiene algún fallo
        // se lanza un error
        if (!result.success) {

            return res.status(400).json({ error: result.error.issues })
        }
        
        // Crea el producto
        const newProduct = await this.farmaciaModel.create({ input: result.data })
        
        // Devuelve el estado de operación exitosa
        // con el nuevo producto
        res.status(201).json(newProduct)
    }

    // Función para eliminar un producto
    delete = async (req, res) => {
        const { id } = req.params
        const result = await this.farmaciaModel.deleteById({ id })

        // Lanza un error si no encuentra el producto
        if (result === false){
            return res.status(400).json({message: 'Producto no encontrado'})
        }

        // Si no hubo ningún error
        return res.json({message: 'Producto eliminado'})
    }

    // Actualizar productos
    update = async (req, res) =>{
        const result = await validacionParcialProducto(req.body)
        
        //Lanza un error si un dato del producto es erróneo
        if(!result.success){
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
        const { id } = req.params
        const updateProduct = await this.farmaciaModel.update({ id, input: result.data})

        if (!updateProduct) {
            return res.status(404).json({ message: "No se encontró el producto" })
        }

        return res.json(updateProduct)
    }
}
