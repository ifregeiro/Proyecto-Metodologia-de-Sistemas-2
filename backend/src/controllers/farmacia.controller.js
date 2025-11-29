import { validarProducto, validacionParcialProducto } from '../schemas/farmaciaSchema.js'

export class FarmaciaController {
    constructor ({ farmaciaModel }){
        this.farmaciaModel = farmaciaModel
    }
    getAllProductos = async (req, res) => {
        const { categoria } = req.query
        const productos = await this.farmaciaModel.getAllProductos({ categoria })
        res.json(productos)
    }
    getProductoById = async (req, res) => {
        const { id } = req.params
        const producto = await this.farmaciaModel.getProductoById({ id })
        if (producto) {
            return res.json(producto)
        }
        res.status(404).json({ message: 'Producto no encontrado'})
    }

    // Función para obtener productos por categoría
    getProductosPorCategoria = async (res, req, next) => {
        try {
            const { id_cat }  = req.params
            const productos = await this.farmaciaModel.getProductosPorCategoria({ id_cat });
            res.status(200).json(productos);
        } catch (error){
            next(error);
        }
    }
    // Función para crear nuevo producto
    createProducto = async (req, res) => {
        const result = await validarProducto(req.body)
        
        // Si el producto ingresado tiene algún fallo
        // se lanza un error
        if (!result.success) {

            return res.status(400).json({ message: 'Error al crear el producto' })
        }
        
        // Crea el producto
        const newProduct = await this.farmaciaModel.createProducto({ input: result.data })
        
        // Devuelve el estado de operación exitosa
        // con el nuevo producto
        res.status(201).json(newProduct)
    }

    // Función para eliminar un producto
    deleteProducto = async (req, res) => {
        const { id } = req.params
        const result = await this.farmaciaModel.deleteProducto({ id })

        // Lanza un error si no encuentra el producto
        if (result === false){
            return res.status(400).json({message: 'Producto no encontrado'})
        }

        // Si no hubo ningún error
        return res.json({message: 'Producto eliminado'})
    }

    // Actualizar productos
    updateProducto = async (req, res) =>{
        const result = await validacionParcialProducto(req.body)
        
        //Lanza un error si un dato del producto es erróneo
        if(!result.success){
            return res.status(400).json({message: 'Error al actualizar el producto.'})
        }
        const { id } = req.params
        const updateProduct = await this.farmaciaModel.updateProducto({ id, input: result.data})

        if (!updateProduct) {
            return res.status(404).json({ message: "No se encontró el producto" })
        }

        return res.json(updateProducto)
    }
}
