import { Categoria } from "../models/Categoria.model"

export async function categoriaSeed() {
    await Categoria.bulkCreate([
        {nombre: "Medicamento"},
        {nombre: "Cuidado Personal"},
        {nombre: "Perfumería"}
    ])
    console.log("Categorías Subidas")
}