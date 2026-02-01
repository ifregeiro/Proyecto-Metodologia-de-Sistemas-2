import { appFarmacia } from "./server.js";
import dotenv from "dotenv";

dotenv.config();

const app = appFarmacia;

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
