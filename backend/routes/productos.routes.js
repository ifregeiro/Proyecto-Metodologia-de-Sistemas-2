import { Router } from 'express'
import {readJSON} from './utils.js'
const router = Router()

router.get('/', (req, res) =>{
    const { categoria } = req.query
    if (categoria) {
        const filtradoProductos = productos.filter( producto => producto.categoria.some(c => c.toLowerCase() === categoria.toLowerCase()))
        return res.json(filtradoProductos)
    }
    res.json(productos)
})