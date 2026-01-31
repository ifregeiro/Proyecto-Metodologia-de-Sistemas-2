import { Link } from "react-router-dom";
import "./style_info_farmacia.css";

export default function InfoFarmacia() {
  return (
    <section class="info">
    <div class="container">
      <h2>Nosotros</h2>
      <p>Contamos con profesionales para encargar tanto física como virtualmente lo que necesites</p>

      {/* FUTURA IMPLEMENTACION */}
      <a href="#" class="button_info">Para guías de como encargar productos de forma virtual hacé click acá</a>
      
      <p><strong>Dirección:</strong> Calle x , Bahía Blanca</p>
      <p><strong>Teléfono:</strong> 291 --- ---- </p>

    </div>
    </section>
  );
}