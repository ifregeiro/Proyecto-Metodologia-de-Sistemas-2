import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carrusel_productos_destacados from "./pages/Carrusel_productos_destacados";
import InfoFarmacia from "./components/InfoFarmacia";
import Cat_productos from "./pages/Cat_productos";
import Cat_higiene_personal from "./pages/Cat_higiene_personal";
import Cat_venta_libre from "./pages/Cat_venta_libre";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Carrusel_productos_destacados />
              <InfoFarmacia />
            </>
          }
        />

        {/* Página general de categorías */}
        <Route path="/categorias" element={<Cat_productos />} />

        {/* Subpáginas de categorías */}
        <Route path="/categorias/higiene" element={<Cat_higiene_personal />} />
        <Route path="/categorias/venta_libre" element={<Cat_venta_libre />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
