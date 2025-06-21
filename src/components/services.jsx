import { useEffect, useRef } from 'react';
import './Section.css';

const services = [
  {
    icon: '🗺️',
    title: 'Mapas y Construcciones',
    description: 'Creación de mapas y construcciones personalizadas para Minecraft y otros entornos 3D.'
  },
  {
    icon: '⚙️',
    title: 'Plugins y Configuración',
    description: 'Desarrollo y configuración de plugins a medida para servidores y comunidades.'
  },
  {
    icon: '🌐',
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, optimizados y adaptados a tu proyecto o marca.'
  },
  {
    icon: '🤖',
    title: 'Bots para Discord',
    description: 'Bots personalizados para automatizar y mejorar la experiencia en tu servidor.'
  },
  {
    icon: '🧊',
    title: 'Modelos 3D',
    description: 'Modelos 3D personalizados como Items, Mobs, Bosses, Estructuras y más.'
  },
  {
    icon: '🎨',
    title: 'Resource Packs',
    description: 'Creación de paquetes de texturas y recursos visuales únicos.'
  },
  {
    icon: '💡',
    title: 'Asesoría Creativa',
    description: 'Acompañamiento y consultoría para potenciar tus ideas y proyectos.'
  },
  {
    icon: '🛠️',
    title: 'Creación de Servidores',
    description: 'Si no sabes cómo crear un servidor, nosotros te ayudamos a configurarlo y optimizarlo.'
  }
];

export default function Services() {
  const sectionRef = useRef();

  useEffect(() => {
    sectionRef.current.style.opacity = 0;
    setTimeout(() => {
      sectionRef.current.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1)';
      sectionRef.current.style.opacity = 1;
    }, 200);
  }, []);

  return (
    <section className="section services" ref={sectionRef}>
      <h2>Nuestros Servicios</h2>
      <div className="services-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '28px', marginTop: 24}}>
        {services.map((s, i) => (
          <div key={i} className="services-item" style={{
            background: 'rgba(10, 24, 38, 0.92)',
            borderRadius: 16,
            boxShadow: '0 4px 24px #00eaff22, 0 1.5px 8px #0008',
            padding: '28px 18px 22px 18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1.5px solid #00eaff33',
            backdropFilter: 'blur(2.5px)',
            transition: 'box-shadow 0.25s, transform 0.22s, background 0.22s',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 180
          }}>
            <div style={{fontSize: '2.2em', marginBottom: 10}}>{s.icon}</div>
            <h4 style={{color: '#00eaff', marginBottom: 8}}>{s.title}</h4>
            <p style={{color: '#b6eaff', fontSize: '1.05em', marginBottom: 0}}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
