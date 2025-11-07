import { Link } from "react-router-dom";
import "./style_navbar.css"; // asegurate de importar tu CSS
import pato from "../img/duck.png";


export default function Navbar() {
  return (
    <nav className="nav-contenedor">
      {/* Menú de navegación */}
      <ul className="nav-izquierda">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categorias">Categorías</Link></li>
      </ul>

      {/* Logo */}
      <div className="logo">
        <img src={pato} alt="Logo de la farmacia" />
        <h1>Farmacia Carabelli</h1>
      </div>

      {/* Si más adelante querés una sección derecha (usuario, carrito, etc.) */}
      <ul className="nav-derecha">
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
