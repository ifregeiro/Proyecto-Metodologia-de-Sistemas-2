import { Link } from "react-router-dom";
import "./style_Cat.css";
import React from "react";
import imgPrimeros_auxilios from "../img/img_categorias/16.png";
import imgCuidado_facial from "../img/img_categorias/17.png";
import imgCuidado_corporal from "../img/img_categorias/18.png";
import imgCuidado_bucal from "../img/img_categorias/19.png";
import imgAfeitado_depilacion from "../img/img_categorias/20.png";

export default function Cat_higiene_personal() {
  return (
    <>
      <main className="categorias">
        <article className="cat-card">
          <Link to="primeros_auxilios" className="ver-detalle">
            <img src={imgPrimeros_auxilios} alt="primeros_auxilios" />
            <h3>Primeros auxilios</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="cuidado_facial" className="ver-detalle">
            <img src={imgCuidado_facial} alt="cuidado_facial" />
            <h3>Cuidado facial</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="cuidado_corporal" className="ver-detalle">
            <img src={imgCuidado_corporal} alt="cuidado_corporal" />
            <h3>Cuidado corporal</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="cuidado_bucal" className="ver-detalle">
            <img src={imgCuidado_bucal} alt="cuidado_bucal" />
            <h3>Cuidado bucal</h3>
          </Link>
        </article>

        <article className="cat-card">
          <Link to="afeitado_y_depilacion" className="ver-detalle">
            <img src={imgAfeitado_depilacion} alt="afeitado_y_depilacion" />
            <h3>Afeitado y depilación</h3>
          </Link>
        </article>
      </main>
    </>
  );
}
