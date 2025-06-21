import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

const initialProjects = [
  {
    id: 'custom-prefix',
    title: 'Custom Prefix',
    image: 'https://i.imgur.com/HuFMza.png',
    autor: 'DKR',
    date: '2025-06-18',
    type: 'Texture Pack',
    requeriments: 'LuckPerms',
    price: 1.99
  },
  {
    id: 'custom-tab',
    title: 'Custom Tab',
    image: '/src/assets/products/tabs.png',
    autor: 'DKR',
    date: '2025-06-19',
    type: 'Texture Pack',
    requeriments: 'TAB',
    price: 0.99
  },
  {
    id: 'jobs-gui',
    title: 'Jobs GUI',
    image: '/src/assets/products/jobss.png',
    autor: 'DKR',
    date: '2025-06-20',
    type: 'Minecraft Config',
    requeriments: 'Jobs Reborn, CommandPanels, PlaceholderAPI, Vault',
    price: 2.99
  },
  // Agrega más proyectos aquí
];

export default function Gallery() {
  const sectionRef = useRef();
  const [lightbox, setLightbox] = useState(null);
  const [projects] = useState(initialProjects);

  useEffect(() => {
    sectionRef.current.style.opacity = 0;
    setTimeout(() => {
      sectionRef.current.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1)';
      sectionRef.current.style.opacity = 1;
    }, 200);
  }, []);

  return (
    <section className="section gallery" ref={sectionRef}>
      <h2>Galería de Productos</h2>
      <Link to="/how-to-buy" className="btn-how-to-buy" style={{textDecoration:'none', color:'inherit', marginBottom: 12, display: 'inline-block'}}>
        ¿Cómo comprar?
      </Link>
      <h2>Minecraft</h2>

      <div className="gallery-grid">
        {projects.length === 0 && <p style={{color:'#b6eaff'}}>No hay proyectos aún.</p>}
        {projects.map((p, i) => (
          <div key={i} className="gallery-item">
            <img src={p.image} alt={p.title} style={{cursor:'pointer'}} />
            <div className="gallery-info">
              <h4>{p.title}</h4>
              <p className="gallery-item-type">{p.type}</p>
              <p className="gallery-item-author">{p.autor}</p>
              <p className="gallery-item-date">{new Date(p.date).toLocaleDateString()}</p>
              <Link
                to={`/gallery/${p.id}`}
                className="gallery-btn-see-more"
                style={{textDecoration:'none', color:'inherit'}}
                onClick={e => e.stopPropagation()}
              >
                <span className="gallery-see-more">Ver mas</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Proyecto" />
        </div>
      )}
    </section>
  );
}
