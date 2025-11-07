import { Link } from "react-router-dom";
import "./style_Cat.css";

export default function Cat_productos() {
  return (
    <main className="categorias">
      <article className="cat-card">
        <Link to="/categorias/venta_libre" className="ver-detalle">
          <img src="img_index/duck.png" alt="medicamentos_de_venta_libre" />
          <h3>Medicamentos de venta libre</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/higiene" className="ver-detalle">
          <img src="img_index/duck.png" alt="higiene_personal" />
          <h3>Higiene personal</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/bebes" className="ver-detalle">
          <img src="img_index/duck.png" alt="bebes_y_maternidad" />
          <h3>Bebés y Maternidad</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/capilar" className="ver-detalle">
          <img src="img_index/duck.png" alt="cuidado_capilar" />
          <h3>Cuidado capilar</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/intimo" className="ver-detalle">
          <img src="img_index/duck.png" alt="cuidado_intimo" />
          <h3>Cuidado íntimo</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/ortopedia" className="ver-detalle">
          <img src="img_index/duck.png" alt="ortopedia_y_ayudas_tecnicas" />
          <h3>Ortopedia y ayudas técnicas</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/dispositivos" className="ver-detalle">
          <img
            src="img_index/duck.png"
            alt="dispositivos_medicos_y_medidores"
          />
          <h3>Dispositivos médicos y medidores</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/proteccion" className="ver-detalle">
          <img src="img_index/duck.png" alt="productos_de_proteccion" />
          <h3>Productos de Protección</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/cosmetica" className="ver-detalle">
          <img src="img_index/duck.png" alt="cosmetica" />
          <h3>Cosmética</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/perfumes" className="ver-detalle">
          <img src="img_index/duck.png" alt="perfumes" />
          <h3>Perfumes</h3>
        </Link>
      </article>

      <article className="cat-card">
        <Link to="/categorias/suplementos" className="ver-detalle">
          <img
            src="img_index/duck.png"
            alt="suplementos_vitaminas_y_nutricion"
          />
          <h3>Suplementos, vitaminas y nutrición</h3>
        </Link>
      </article>
    </main>
  );
}
