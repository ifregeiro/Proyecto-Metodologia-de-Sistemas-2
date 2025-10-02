export default function ProductCard({ producto }) {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.categoria}</p>
      <p>${producto.precio}</p>
    </div>
  );
}
