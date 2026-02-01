import dotenv from "dotenv";
dotenv.config();

import { sequelize } from "../database/database.js";

import "../models/Categoria.model.js";
import "../models/Producto.model.js";
import "../models/SubCategoria.model.js";

import { ProductosSeed } from "./productos.seeder.js";
import { categoriaSeed } from "./categorias.seeder.js";
import { subCategoriasSeed } from "./subCategorias.seeder.js";

const seed = async () => {
    try {
        console.log("Reiniciando la base de datos...");
        await sequelize.sync({force: true});

        console.log("Insertando Categorias");
        await categoriaSeed();

        console.log("Insertando SubCategorias");
        await subCategoriasSeed();

        console.log("Insertando Productos");
        await ProductosSeed();

        console.log("Base de datos iniciada con éxito.");
        process.exit();
    } catch (error) {
        console.error("Error al ejecutar seeds:", error);
        process.exit(1);
    }
};

seed();