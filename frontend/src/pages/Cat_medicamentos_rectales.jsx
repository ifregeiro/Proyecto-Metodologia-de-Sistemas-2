import { Link } from "react-router-dom";
import './style_productos.css'
import duck from "../img/duck.png"; // imagen local en /src/img/duck.png

function Cat_medicamentos_rectales() {
  return (
    <main className="productos-contenedor">

      {/* Producto 1 */}
      <article className="producto">
        <Link to="#">
          <img src={duck} alt="Nombre del producto 1" />
          <h3>Nombre del producto 1</h3>
          <p className="precio">$8.500</p>
        </Link>
      </article>

      {/* Producto 2 */}
      <article className="producto">
        <Link to="#">
          <img src={duck} alt="Nombre del producto 2" />
          <h3>Nombre del producto 2</h3>
          <p className="precio">$7.900</p>
        </Link>
      </article>

      {/* Producto 3 */}
      <article className="producto">
        <Link to="#">
          <img src={duck} alt="Nombre del producto 3" />
          <h3>Nombre del producto 3</h3>
          <p className="precio">$6.200</p>
        </Link>
      </article>

    </main>
  );
}

export default Cat_medicamentos_rectales;
