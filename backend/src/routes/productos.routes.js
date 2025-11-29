import { Router } from 'express'
import { ProductoController } from '../controllers/productos.controller.js'

export const createRutaProducto = ({ farmaciaModel }) => {
    const productosRouter = Router()

    const controller = new ProductoController({ farmaciaModel })
// Devolver todos los productos
    productosRouter.get('/', controller.getAllProductos)

// Devolder producto por id
    productosRouter.get('/:id', controller.getProductoById)

// Devolver productos por categoría
    productosRouter.get('/categoria/:id_cat', controller.getProductosPorCategoria)
// Crear producto nuevo
    productosRouter.post('/', controller.createProducto)

// Eliminar producto por id
    productosRouter.delete('/:id', controller.deleteProducto)
// Actualizar información de un producto por id
    productosRouter.put('/:id', controller.updateProducto)

    return productosRouter
}