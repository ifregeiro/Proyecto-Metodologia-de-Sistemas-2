import { Link } from "react-router-dom";
import "./style_Cat.css";
import pato from "../img/duck.png";

export default function Cat_higiene_personal() {
  return (
    <>
      <main className="categorias">
        <article className="cat-card">
          <Link to="primeros_auxilios" className="ver-detalle">
            <img src={pato} alt="primeros_auxilios" />
            <h3>Primeros auxilios</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="cuidado_facial" className="ver-detalle">
            <img src={pato} alt="cuidado_facial" />
            <h3>Cuidado facial</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="cuidado_corporal" className="ver-detalle">
            <img src={pato} alt="cuidado_corporal" />
            <h3>Cuidado corporal</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="cuidado_bucal" className="ver-detalle">
            <img src={pato} alt="cuidado_bucal" />
            <h3>Cuidado bucal</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="afeitado_y_depilacion" className="ver-detalle">
            <img src={pato} alt="afeitado_y_depilacion" />
            <h3>Afeitado y depilación</h3>
          </Link>
        </article>
      </main>
    </>
  );
}
