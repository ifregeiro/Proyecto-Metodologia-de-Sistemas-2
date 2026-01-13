import { Link } from "react-router-dom";
import "./style_Cat.css";
import React from "react";
import imgVentaLibre from "../img/img_categorias/1.png";
import imgHigiene from "../img/img_categorias/2.png";
import imgBebes from "../img/img_categorias/3.png";
import imgCuidado_capilar from "../img/img_categorias/4.png";
import imgIntimo from "../img/img_categorias/5.png";
import imgOrtopedia from "../img/img_categorias/6.png";
import imgDispositivos from "../img/img_categorias/7.png";
import imgProteccion from "../img/img_categorias/8.png";
import imgCosmeticos from "../img/img_categorias/9.png";
import imgPerfumes from "../img/img_categorias/10.png";
import imgSuplementos from "../img/img_categorias/11.png";


export default function Cat_productos() {
  return (
    <main className="categorias">
      <article className="cat-card">
        <Link to="/categorias/venta_libre" className="ver-detalle">
          <img src={imgVentaLibre} alt="medicamentos_de_venta_libre" />
          <h3>Medicamentos de venta libre</h3>
        </Link> 
      </article>

      <article className="cat-card">
        <Link to="/categorias/higiene" className="ver-detalle">
          <img src={imgHigiene} alt="higiene_personal" />
          <h3>Higiene personal</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/bebes" className="ver-detalle">
          <img src={imgBebes} alt="bebes_y_maternidad" />
          <h3>Bebés y Maternidad</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/cuidado_capilar" className="ver-detalle">
          <img src={imgCuidado_capilar} alt="cuidado_capilar" />
          <h3>Cuidado capilar</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/intimo" className="ver-detalle">
          <img src={imgIntimo} alt="cuidado_intimo" />
          <h3>Cuidado íntimo</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/ortopedia" className="ver-detalle">
          <img src={imgOrtopedia} alt="ortopedia_y_ayudas_tecnicas" />
          <h3>Ortopedia y ayudas técnicas</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/dispositivos" className="ver-detalle">
          <img src={imgDispositivos} alt="dispositivos_medicos_y_medidores" />
          <h3>Dispositivos médicos y medidores</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/proteccion" className="ver-detalle">
          <img src={imgProteccion} alt="productos_de_proteccion" />
          <h3>Productos de Protección</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/cosmetica" className="ver-detalle">
          <img src={imgCosmeticos} alt="cosmetica" />
          <h3>Cosmética</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/perfumes" className="ver-detalle">
          <img src={imgPerfumes} alt="perfumes" />
          <h3>Perfumes</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/suplementos" className="ver-detalle">
          <img src={imgSuplementos} alt="suplementos_vitaminas_y_nutricion" />
          <h3>Suplementos, vitaminas y nutrición</h3>
        </Link>
      </article>
    </main>
  );
}
