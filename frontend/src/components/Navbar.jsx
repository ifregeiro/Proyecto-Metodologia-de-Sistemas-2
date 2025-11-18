import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>Farmacia Carabelli</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/horarios">Horarios</Link></li>
        <li><Link to="/ubicacion">Ubicación</Link></li>
        <li><Link to="/guardia">Farmacias en Guardia</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
