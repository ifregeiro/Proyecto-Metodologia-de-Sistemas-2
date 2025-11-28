import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Carrusel_productos_destacados from "./pages/Carrusel_productos_destacados";

import InfoFarmacia from "./components/InfoFarmacia";

import Cat_productos from "./pages/Cat_productos";

import Cat_higiene_personal from "./pages/Cat_higiene_personal";
import Cat_primeros_auxilios from "./pages/Cat_primeros_auxilios";

import Cat_cuidado_facial from "./pages/Cat_cuidado_facial";
import Cat_cuidado_corporal from "./pages/Cat_cuidado_corporal";
import Cat_cuidado_bucal from "./pages/Cat_cuidado_bucal";

import Cat_afeitado_y_depilacion from "./pages/Cat_afeitado_y_depilacion";
import Cat_bebes from "./pages/Cat_bebes";
import Cat_cuidado_capilar from "./pages/Cat_cuidado_capilar";
import Cat_intimo from "./pages/Cat_intimo";
import Cat_ortopedia from "./pages/Cat_ortopedia";
import Cat_dispositivos from "./pages/Cat_dispositivos";
import Cat_proteccion from "./pages/Cat_proteccion";
import Cat_perfumes from "./pages/Cat_perfumes";
import Cat_cosmetica from "./pages/Cat_cosmetica";
import Cat_suplementos from "./pages/Cat_suplementos";

import Cat_venta_libre from "./pages/Cat_venta_libre";
import Cat_medicamentos_topicos from "./pages/Cat_medicamentos_topicos";
import Cat_medicamentos_via_oral from "./pages/Cat_medicamentos_via_oral";
import Cat_medicamentos_nasales from "./pages/Cat_medicamentos_nasales";
import Cat_medicamentos_rectales from "./pages/Cat_medicamentos_rectales";





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

        {/* Página de categorías */}
        <Route path="/categorias/bebes" element={<Cat_bebes />} />
        <Route path="/categorias/cuidado_capilar" element={<Cat_cuidado_capilar />} />
        <Route path="/categorias/intimo" element={<Cat_intimo />} />
        <Route path="/categorias/ortopedia" element={<Cat_ortopedia />} />
        <Route path="/categorias/dispositivos" element={<Cat_dispositivos />} />
        <Route path="/categorias/proteccion" element={<Cat_proteccion/>} />
        <Route path="/categorias/perfumes" element={<Cat_perfumes/>} />
        <Route path="/categorias/cosmetica" element={<Cat_cosmetica/>} />
        <Route path="/categorias/suplementos" element={<Cat_suplementos/>} />

        {/* Subpáginas de categorías */}
        <Route path="/categorias/higiene" element={<Cat_higiene_personal />} />
        <Route path="/categorias/venta_libre" element={<Cat_venta_libre />} />
        

        {/* Subpáginas de higiene personal */}
        <Route path="/categorias/higiene/primeros_auxilios" element={<Cat_primeros_auxilios />} />
        <Route path="/categorias/higiene/afeitado_y_depilacion" element={<Cat_afeitado_y_depilacion />} />
        <Route path="/categorias/higiene/cuidado_facial" element={<Cat_cuidado_facial />} />
        <Route path="/categorias/higiene/cuidado_corporal" element={<Cat_cuidado_corporal />} />
        <Route path="/categorias/higiene/cuidado_bucal" element={<Cat_cuidado_bucal />} />
        
        {/* Subpáginas de venta libre */}
        <Route path="/categorias/venta_libre/medicamentos_topicos" element={<Cat_medicamentos_topicos />} />
        <Route path="/categorias/venta_libre/medicamentos_via_oral" element={<Cat_medicamentos_via_oral />} />
        <Route path="/categorias/venta_libre/medicamentos_nasales" element={<Cat_medicamentos_nasales />} />
        <Route path="/categorias/venta_libre/medicamentos_rectales" element={<Cat_medicamentos_rectales />} />
        
        {/* "/categorias/venta_libre/medicamentos_rectales" (concatenacion de los links que aparecen en el jsx) 
        element={<Cat_medicamentos_rectales />} (lo que esta al lado de import en naranja) */}
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
