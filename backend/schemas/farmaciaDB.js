import z from 'zod'

export const ProductoSchema = z.object({
    nombre : z.string({
        invalid_type_error: 'El nombre del producto debe ser un string',
        requiered_error: 'El producto requiere un nombre.'
    }),
    descripcion: z.string(),
    precio: z.number().int().positive(),
    stock: z.number().min(0)

})
