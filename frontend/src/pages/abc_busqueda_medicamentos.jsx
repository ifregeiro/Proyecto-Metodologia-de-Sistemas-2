import { useState } from "react";
import "./abc_busqueda_medicamentos.css";

{/* FUTURA IMPLEMENTACION */}
export default function Abc_busqueda_medicamentos() {
  const [letraSeleccionada, setLetraSeleccionada] = useState(null);

  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <section className="abecedario-medicamentos">
      <h2 className="titulo-abecedario">Buscar por letra</h2>

      <div className="abecedario">
        {letras.map((letra) => (
          <button
            key={letra}
            onClick={() => setLetraSeleccionada(letra)}
            className={`letra-btn ${
              letra === letraSeleccionada ? "activa" : ""
            }`}
          >
            {letra}
          </button>
        ))}

        <button onClick={() => setLetraSeleccionada(null)} className="letra-btn">
          Todos
        </button>
      </div>

      {/* (opcional) mostrar cuál está seleccionada */}
      {letraSeleccionada && (
        <p className="filtro-info">
          Mostrando medicamentos que empiezan con: <b>{letraSeleccionada}</b>
        </p>
      )}
    </section>
  );
}
