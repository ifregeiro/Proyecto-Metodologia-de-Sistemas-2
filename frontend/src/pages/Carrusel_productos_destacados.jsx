import { useEffect } from "react";

export default function Carrusel() {
  useEffect(() => {
    const contenedor = document.querySelector(".carrusel-contenedor");
    const btnIzq = document.querySelector(".btn-izquierda");
    const btnDer = document.querySelector(".btn-derecha");

    btnIzq.addEventListener("click", () => {
      contenedor.scrollLeft -= contenedor.offsetWidth;
    });

    btnDer.addEventListener("click", () => {
      contenedor.scrollLeft += contenedor.offsetWidth;
    });
  }, []);

  return (
    <section className="carrusel-productos">
      <h2 className="titulo-carrusel">Productos destacados</h2>

      <div className="carrusel-botones">
        <button className="btn-izquierda">◀</button>
        <button className="btn-derecha">▶</button>
      </div>

      <div className="carrusel-contenedor">
        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="actron_600mg" />
            <h3>Actron 600mg</h3>
            <p className="precio">$8.500</p>
          </a>
        </article>

        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="dermaglos_facial_bb_cream" />
            <h3>Dermaglós Facial BB Cream</h3>
            <p className="precio">$30.200</p>
          </a>
        </article>

        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="off_family" />
            <h3>OFF Family</h3>
            <p className="precio">$10.200</p>
          </a>
        </article>

        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="actron_1g" />
            <h3>Actron 1g</h3>
            <p className="precio">$10.200</p>
          </a>
        </article>

        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="dermaglos_facial_factor_50" />
            <h3>Dermaglós Solar factor 50</h3>
            <p className="precio">$16.200</p>
          </a>
        </article>

        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="dermaglos_facial_factor_50" />
            <h3>Dermaglós Solar factor 50</h3>
            <p className="precio">$16.200</p>
          </a>
        </article>

        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="dermaglos_facial_factor_50" />
            <h3>Dermaglós Solar factor 50</h3>
            <p className="precio">$16.200</p>
          </a>
        </article>
      </div>
    </section>
  );
}


{/* 
  export default function Carrusel() {
  return (
    <section className="carrusel-productos">
      <h2 className="titulo-carrusel">Productos destacados</h2>
      <div className="carrusel-contenedor">
        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="actron_600mg" />
            <h3>Actron 600mg</h3>
            <p className="precio">$8.500</p>
          </a>
        </article>

        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="dermaglos_facial_bb_cream" />
            <h3>Dermaglós Facial BB Cream</h3>
            <p className="precio">$30.200</p>
          </a>
        </article>

        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="off_family" />
            <h3>OFF Family</h3>
            <p className="precio">$10.200</p>
          </a>
        </article>

        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="actron_1g" />
            <h3>Actron 1g</h3>
            <p className="precio">$10.200</p>
          </a>
        </article>

        <article className="producto">
          <a href="#">
            <img src="img_index/duck.png" alt="dermaglos_facial_factor_50" />
            <h3>Dermaglós Solar factor 50</h3>
            <p className="precio">$16.200</p>
          </a>
        </article>
      </div>
    </section>
  );
}
*/}



