import z from 'zod'

export const ProductoSchema = z.object({
    nombre : z.string({
        invalid_type_error: 'El nombre del producto debe ser un string',
        required_error: 'El producto requiere un nombre.'
    }),
    descripcion: z.string(),
    precio: z.number().int().positive(),
    stock: z.number().min(0),
    categoria: z.array(
        z.enum([ 'Cremas', 'Cuidado de la piel', 'Suplementos y vitaminas', 'Higiene personal', 'Maquillajes', 'Medicamentos de venta libre']),
        {
            required_error: 'Se requiere al menos una categoria por producto.',
            invalid_type_error: 'La categoria debe ser un arreglo de enumeraciones de Categorías.'
        }
    )
})

export function validarProducto(p) {
    return ProductoSchema.safeParse(p)
}

export function validacionParcialProducto(p) {
    return ProductoSchema.partial().safeParse(p)
}