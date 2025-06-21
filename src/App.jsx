import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Services from './components/services';
import ProductDetail from './components/ProductDetail';
import HowToBuy from './components/how-to-buy';
import './App.css';

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Navbar />
      <div style={{ paddingTop: '70px', position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<ProductDetail />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
