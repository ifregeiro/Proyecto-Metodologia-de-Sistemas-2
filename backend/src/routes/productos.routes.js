import { Router } from "express";
import { ProductoController } from "../controllers/productos.controller.js";

export const productosRouter = Router();

// Devolver productos por categoría
productosRouter.get(
  "/categoria/:id_cat",
  ProductoController.getProductosPorCategoria,
);

// Devolder producto por id
productosRouter.get("/:id", ProductoController.getProductoById);

// Devolver todos los productos
productosRouter.get("/", ProductoController.getAllProductos);

// Crear producto nuevo
productosRouter.post("/", ProductoController.createProducto);

// Eliminar producto por id
productosRouter.delete("/:id", ProductoController.deleteProducto);

// Actualizar información de un producto por id
productosRouter.put("/:id", ProductoController.updateProducto);
