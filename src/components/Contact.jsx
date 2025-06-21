import { useEffect, useRef } from 'react';
import './Section.css';

const social = [
  {
    name: 'Discord',
    url: '#',
    icon: '/src/assets/logo/discord-icon.png',
    color: '#00eaff'
  },
  {
    name: 'Instagram',
    url: '#',
    icon: '/src/assets/logo/icons8-instagram-500.png',
    color: '#00eaff'
  },
  {
    name: 'Twitter',
    url: '#',
    icon: '/src/assets/logo/twitter-icon.png',
    color: '#00eaff'
  }
];

export default function Contact() {
  const sectionRef = useRef();

  useEffect(() => {
    sectionRef.current.style.opacity = 0;
    setTimeout(() => {
      sectionRef.current.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1)';
      sectionRef.current.style.opacity = 1;
    }, 200);
  }, []);

  return (
    <section className="section contact" ref={sectionRef}>
      <h2>Contacto</h2>
      <p style={{fontSize: '1.15em', color: '#b6eaff', marginBottom: 18}}>
        ¡Estamos para ayudarte! Escríbenos en cualquiera de nuestras redes:
      </p>
      <div className="social-links" style={{display: 'flex', justifyContent: 'center', gap: 32, marginTop: 24}}>
        {social.map((s, i) => (
          <a key={i} href={s.url} title={s.name} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', color: s.color, transition: 'transform 0.2s',
          }}
            target="_blank" rel="noopener noreferrer"
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.12)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={s.icon} alt={s.name} style={{width: 54, height: 54, borderRadius: 12, boxShadow: `0 2px 12px ${s.color}55`, marginBottom: 8, background: '#00eaff'}} />
            <span style={{fontWeight: 600, fontSize: '1.05em'}}>{s.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
