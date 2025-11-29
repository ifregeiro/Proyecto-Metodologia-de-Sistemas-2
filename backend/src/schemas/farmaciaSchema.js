import z from 'zod'
import { obtenerCategorias } from "../config/config.js"
import { obtenerSubCategorias } from '../config/config.js';

export const ProductoSchema = z.object({
    nombre : z.string({
        invalid_type_error: 'El nombre del producto debe ser un string',
        required_error: 'El producto requiere un nombre.'
    }),
    descripcion: z.string(),
    precio: z.number().int().positive(),
    stock: z.number().min(0),
    categoria: z
        .array(z.string())
        .nonempty("Se requiere por lo menos una categoría.")
        .refine(async (cats) => {
            const disponibles = await obtenerCategorias();
            return cats.every(c => disponibles.includes(c));
        }, {
            message:"Hay una o más categorías inexistentes en la base de datos."
        }),
    
    sub_categoria: z
        .array(z.string())
        .refine(async (subcats) => {
            const disponibles = await obtenerSubCategorias();
            return subcats.every(s => disponibles.includes(s));
        }, {
            message: "Hay una o más subcategorías inexistentes en la base de datos."
        })

})
