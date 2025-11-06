import { useEffect, useState } from "react";
import { getProductos } from "../services/productoService";
import ProductCard from "../components/ProductCard";

export default function Catalogo() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((data) => setProductos(data));
  }, []);

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div>
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
