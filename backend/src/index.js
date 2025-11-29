import { appFarmacia } from "./server.js";

const app = appFarmacia;    

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})
