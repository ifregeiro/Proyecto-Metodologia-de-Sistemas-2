export default function FarmaciasGuardia() {
  const farmacias = [
    { nombre: "Farmacia Carabelli", direccion: "Bartolomé Mitre 198" },
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
