import { Producto } from "../models/Producto.model.js";

export async function ProductosSeed() {
  await Producto.bulkCreate([
    {
      nombre: "Paracetamol 500mg x 10 comprimidos",
      descripcion:
        "Alivia el dolor y reduce la fiebre. Ideal para dolores de cabeza, musculares y estados gripales.",
      precio: 850,
      stock: 120,
      id_cat: 1,
      id_subcat: 1,
    },
    {
      nombre: "Ibuprofeno 400mg x 20 comprimidos",
      descripcion:
        "Antiinflamatorio y analgésico. Indicado para dolores menstruales, musculares y dentales.",
      precio: 1250,
      stock: 80,
      id_cat: 1,
      id_subcat: 1,
    },
    {
      nombre: "Antigripal Next Día y Noche",
      descripcion:
        "Combinación de analgésico, antipirético y descongestivo. Alivia síntomas de resfríos y gripes.",
      precio: 1900,
      stock: 60,
      id_cat: 1,
      id_subcat: 2,
    },
    {
      nombre: "Shampoo Anticaspa Head & Shoulders 375ml",
      descripcion:
        "Elimina la caspa visible y mantiene el cuero cabelludo limpio y fresco.",
      precio: 3400,
      stock: 50,
      id_cat: 2,
      id_subcat: 4,
    },
    {
      nombre: "Vitamina C 1000mg x 30 comprimidos",
      descripcion:
        "Refuerza el sistema inmunológico y contribuye a la formación de colágeno.",
      precio: 2700,
      stock: 100,
      id_cat: 3,
      id_subcat: 5,
    },
    {
      nombre: "Proteína Whey 1kg",
      descripcion:
        "Suplemento proteico ideal para aumentar masa muscular y recuperación post-entrenamiento.",
      precio: 14500,
      stock: 25,
      id_cat: 3,
      id_subcat: 6,
    },
    {
      nombre: "Cepillo Dental Oral-B Indicator",
      descripcion:
        "Cerdas con indicador de desgaste. Recomendado por odontólogos.",
      precio: 1200,
      stock: 200,
      id_cat: 4,
      id_subcat: 7,
    },
    {
      nombre: "Crema Hidratante Nivea Soft 200ml",
      descripcion:
        "Hidratación profunda para todo tipo de piel. Textura ligera y rápida absorción.",
      precio: 3200,
      stock: 75,
      id_cat: 2,
      id_subcat: 9,
    },
    {
      nombre: "Pañales Pampers Premium Care G x 34",
      descripcion: "Máxima absorción y suavidad para la piel del bebé.",
      precio: 8900,
      stock: 40,
      id_cat: 5,
      id_subcat: 8,
    },
    {
      nombre: "Jarabe para la Tos Bisolvon 120ml",
      descripcion:
        "Mucolítico que facilita la expulsión de la flema en procesos bronquiales.",
      precio: 4100,
      stock: 45,
      id_cat: 1,
      id_subcat: 10,
    },
  ]);
  console.log("Productos cargados.");
}
