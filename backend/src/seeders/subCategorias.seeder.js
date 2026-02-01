import { SubCategoria } from "../models/SubCategoria.model.js";

export async function subCategoriasSeed() {
  await SubCategoria.bulkCreate([
    { nombre: "Analgésicos" },
    { nombre: "Antigripales" },
    { nombre: "Dermatología" },
    { nombre: "Cabello" },
    { nombre: "Vitaminas" },
    { nombre: "Suplementos Deportivos" },
    { nombre: "Higiene Bucal" },
    { nombre: "Pañales" },
    { nombre: "Cremas Hidratantes" },
    { nombre: "Jarabes" },
  ]);
  console.log("Subcategorías subidas");
}
