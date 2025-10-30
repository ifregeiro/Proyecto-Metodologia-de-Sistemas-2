import { FarmaciaModel } from "../models/farmaciaDB";

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
}