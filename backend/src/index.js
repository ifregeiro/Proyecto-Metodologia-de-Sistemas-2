import { createServer } from "./server.js";
import { FarmaciaModel } from "./models/farmacia.model.js";

const app = createServer({ farmaciaModel: FarmaciaModel});    

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})
