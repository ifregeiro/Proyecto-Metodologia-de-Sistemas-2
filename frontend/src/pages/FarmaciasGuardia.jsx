export default function FarmaciasGuardia() {
  const farmacias = [
    { nombre: "Farmacia Central", direccion: "Av. Corrientes 1234" },
    { nombre: "Farmacia Norte", direccion: "Calle Falsa 456" },
  ];

  return (
    <div>
      <h2>Farmacias en Guardia</h2>
      <ul>
        {farmacias.map((f, i) => (
          <li key={i}>{f.nombre} - {f.direccion}</li>
        ))}
      </ul>
    </div>
  );
}
