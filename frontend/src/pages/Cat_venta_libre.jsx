import { Link } from "react-router-dom";
import "./style_Cat.css";
import pato from "../img/duck.png";

export default function Cat_venta_libre() {
  return (
    <>
      <main className="categorias">
        <article className="cat-card">
          <Link to="#" className="ver-detalle">
            <img src={pato} alt="medicamentos_topicos" />
            <h3>Medicamentos tópicos</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="#" className="ver-detalle">
            <img src={pato} alt="medicamentos_via_oral" />
            <h3>Medicamentos vía oral</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="#" className="ver-detalle">
            <img src={pato} alt="medicamentos_nasales" />
            <h3>Medicamentos nasales</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="#" className="ver-detalle">
            <img src={pato} alt="medicamentos_rectales" />
            <h3>Medicamentos rectales</h3>
          </Link>
        </article>
      </main>
    </>
  );
}
