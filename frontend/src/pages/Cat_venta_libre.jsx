import { Link } from "react-router-dom";
import "./style_Cat.css";
import React from "react";
import imgTopicos from "../img/img_categorias/12.png";
import imgVia_oral from "../img/img_categorias/13.png";
import imgNasales from "../img/img_categorias/14.png";
import imgRectales from "../img/img_categorias/15.png";

export default function Cat_venta_libre() {
  return (
    <>
      <main className="categorias">
        <article className="cat-card">
          <Link to="medicamentos_topicos" className="ver-detalle">
            <img src={imgTopicos} alt="medicamentos_topicos" />
            <h3>Medicamentos tópicos</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="medicamentos_via_oral" className="ver-detalle">
            <img src={imgVia_oral} alt="medicamentos_via_oral" />
            <h3>Medicamentos vía oral</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="medicamentos_nasales" className="ver-detalle">
            <img src={imgNasales} alt="medicamentos_nasales" />
            <h3>Medicamentos nasales</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="medicamentos_rectales" className="ver-detalle">
            <img src={imgRectales} alt="medicamentos_rectales" />
            <h3>Medicamentos rectales</h3>
          </Link>
        </article>
      </main>
    </>
  );
}
