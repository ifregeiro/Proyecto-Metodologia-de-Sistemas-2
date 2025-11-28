import { useEffect } from "react";
import React from "react";
import '../pages/style_contacto.css'

export default function Contacto() {
  return (
    <div className="contacto">
      <h2>Contacto</h2>

      <p>WhatsApp: <a href="https://wa.me/5491112345678">+54 9 11 1234-5678</a></p>

      <p>Teléfono: <a href="tel:+541112345678">+54 11 1234-5678</a></p>
    </div>
  );
}
