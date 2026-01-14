import { Link } from "react-router-dom";
import "./style_productos.css";
import React from "react";
import duck from "../img/duck.png";

{
  /* REFERENCIA DE DATOS */
}
const productos = [
  {
    id: 1,
    nombre: "Nombre del producto 1",
    precio: "$8.500",
    imagen: duck,
    ruta: "#",
  },
  {
    id: 2,
    nombre: "Nombre del producto 2",
    precio: "$7.900",
    imagen: duck,
    ruta: "#",
  },
  {
    id: 3,
    nombre: "Nombre del producto 3",
    precio: "$6.200",
    imagen: duck,
    ruta: "#",
  },
];

function Cat_primeros_auxilios() {
  return (
    <main className="productos-contenedor">
      {productos.map((prod) => (
        <article key={prod.id} className="producto">
          <Link to={prod.ruta}>
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p className="precio">{prod.precio}</p>
          </Link>
        </article>
      ))}
    </main>
  );
}

export default Cat_primeros_auxilios;
