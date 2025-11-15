import { Router } from 'express'
import { FarmaciaController } from '../controllers/farmacia.controller.js'

export const createRutaProducto = ({ farmaciaModel }) => {
    const productosRouter = Router()

    const controller = new FarmaciaController({ farmaciaModel })
// Devolver todos los productos
    productosRouter.get('/', controller.getAll)
// Crear producto nuevo
    productosRouter.post('/', controller.create)
// Devolder producto por id
    productosRouter.get('/:id', controller.getById)
// Eliminar producto por id
    productosRouter.delete('/:id', controller.delete)
// Actualizar información de un producto por id
    productosRouter.put('/:id', controller.update)

    return productosRouter
}