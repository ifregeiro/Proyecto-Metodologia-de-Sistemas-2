import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Horarios from './pages/Horarios';
import FarmaciasGuardia from './pages/FarmaciasGuardia';
import './app.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/guardia" element={<FarmaciasGuardia />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
