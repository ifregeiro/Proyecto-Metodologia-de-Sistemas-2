import { Router } from 'express'
import { FarmaciaController } from '../controllers/farmacia.controller.js'

export const createRutaProducto = ({ farmaciaModel }) => {
    const Productosrouter = Router()

    const ProductoController = new ProductoController({ farmaciaModel })
// Devolver todos los productos
    Productosrouter.get('/', FarmaciaController.getAll)
// Crear producto nuevo
    Productosrouter.post('/', FarmaciaController.create)
// Devolder producto por id
    Productosrouter.get('/:id', FarmaciaController.getById)
// Eliminar producto por id
    Productosrouter.delete('/:id', FarmaciaController.delete)
// Actualizar información de un producto por id
    Productosrouter.put('/:id', FarmaciaController.update)
}