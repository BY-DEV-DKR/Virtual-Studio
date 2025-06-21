import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de que la ruta al logo sea correcta

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar" aria-label="Barra de navegación principal">
      <div className="navbar-logo">
        <Link to="/" aria-label="Ir a la página de inicio">
        <span className="navbar-title">Virtual Studio</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Sobre Nosotros</Link></li>
        <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Galería</Link></li>
        <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Servicios</Link></li>
        <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Equipo</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contacto</Link></li>
      </ul>
    </nav>
  );
}
