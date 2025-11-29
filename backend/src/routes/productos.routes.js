import { Router } from 'express'
import { ProductoController } from '../controllers/productos.controller.js'

export const productosRouter = Router()

// Devolver todos los productos
productosRouter.get('/', ProductoController.getAllProductos)

// Devolder producto por id
productosRouter.get('/:id', ProductoController.getProductoById)

// Devolver productos por categoría
productosRouter.get('/categoria/:id_cat', ProductoController.getProductosPorCategoria)
// Crear producto nuevo
productosRouter.post('/', ProductoController.createProducto)

// Eliminar producto por id
productosRouter.delete('/:id', ProductoController.deleteProducto)

// Actualizar información de un producto por id
productosRouter.put('/:id', ProductoController.updateProducto)


