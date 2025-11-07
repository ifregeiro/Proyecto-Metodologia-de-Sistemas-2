import './style_Cat.css'

export default function Cat_higiene_personal() {
  return (
    <main className="categorias">
      <article className="cat-card">
        <a href="#" className="ver-detalle">
          <img src="img_index/duck.png" alt="primeros_auxilios" />
          <h3>Primeros auxilios</h3>
        </a>
      </article>

      <article className="cat-card">
        <a href="#" className="ver-detalle">
          <img src="img_index/duck.png" alt="cuidado_facial" />
          <h3>Cuidado facial</h3>
        </a>
      </article>

      <article className="cat-card">
        <a href="#" className="ver-detalle">
          <img src="img_index/duck.png" alt="cuidado_corporal" />
          <h3>Cuidado corporal</h3>
        </a>
      </article>

      <article className="cat-card">
        <a href="#" className="ver-detalle">
          <img src="img_index/duck.png" alt="cuidado_bucal" />
          <h3>Cuidado bucal</h3>
        </a>
      </article>

      <article className="cat-card">
        <a href="#" className="ver-detalle">
          <img src="img_index/duck.png" alt="afeitado_y_depilacion" />
          <h3>Afeitado y depilación</h3>
        </a>
      </article>
    </main>
  );
}
