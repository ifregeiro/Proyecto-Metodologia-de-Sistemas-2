import { Categoria } from "../models/Categoria.model"

export async function categoriaSeed() {
    await Categoria.bulkCreate([
        {nombre: 'Medicamento'},
        {nombre: 'Cuidado Personal'},
        {nombre: 'Vitaminas y Suplementos'},
        {nombre: 'Higiene'},
        {nombre: 'Bebés y Maternidad'}
    ])
    console.log("Categorías Subidas")
}