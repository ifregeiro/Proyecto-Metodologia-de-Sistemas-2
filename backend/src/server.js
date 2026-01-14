import express, { json } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import dotenv from "dotenv";
import { corsMiddleware } from "./middlewares/cors.js";
import { productosRouter } from "./routes/productos.routes.js";

dotenv.config();

export const appFarmacia = express();

appFarmacia.use(json());

appFarmacia.use(helmet());

appFarmacia.use(corsMiddleware());

appFarmacia.use(
  rateLimit({
    windowMs: 60 * 1000, // 1 minuto
    max: 5,
    handler: (req, res) => {
      res
        .status(429)
        .send("Demasiados intentos en poco tiempo, inténtalo más tarde.");
    },
  }),
);

// Ruta de los productos
appFarmacia.use("/productos", productosRouter);

// Healt del servidor
appFarmacia.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

//Manejo global de errores
appFarmacia.use((err, req, res) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Error interno del servidor." });
});
