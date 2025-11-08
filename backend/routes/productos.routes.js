import { Router } from 'express'
import {readJSON} from './utils.js'
import { FarmaciaModel } from '../models/farmaciaDB.js'
const router = Router()

router.get('/producto', (req, res) =>{
    const { categoria } = req.query
    if (categoria) {
        const filtradoProductos = productos.filter( producto => producto.categoria.some(c => c.toLowerCase() === categoria.toLowerCase()))
        return res.json(filtradoProductos)
    }
    res.json(productos)
})

router.post('/', (req,res) => {
    const nuevoProducto = req.body
})