export default function ProductCard({ producto }) {
  return (
    <div className="card">
      <h3>{producto.nombre}</h3>
      <p><strong>Precio:</strong> ${producto.precio}</p>

      {producto.Categoria && (
        <p><strong>Categoría:</strong> {producto.Categoria.nombre}</p>
      )}
    </div>
  );
}
