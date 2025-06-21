import { useEffect, useRef, useState } from 'react';
import './Section.css';

const servicios = [
  { icon: '🗺️', text: 'Creación de mapas/construcciones personalizados' },
  { icon: '⚙️', text: 'Configuraciones de plugins' },
  { icon: '🌐', text: 'Creación de páginas web' },
  { icon: '🤖', text: 'Bots personalizados para Discord' },
  { icon: '🧊', text: 'Modelos 3D personalizados' },
  { icon: '🎨', text: 'Paquetes de texturas/Resource Packs' },
  { icon: '💡', text: 'Asesoramiento en proyectos de Minecraft' },
  { icon: '✨', text: '¡Y mucho más!' },
];

export default function About() {
  const sectionRef = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    sectionRef.current.style.opacity = 0;
    setTimeout(() => {
      sectionRef.current.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1)';
      sectionRef.current.style.opacity = 1;
    }, 200);
    // Contador animado
    let i = 0;
    const target = 1;
    const interval = setInterval(() => {
      i++;
      setCount(i);
      if (i >= target) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section about" ref={sectionRef}>
      <h2>Sobre Nosotros</h2>
      <p style={{fontSize: '1.15em', color: '#b6eaff', marginBottom: 18}}>
        Virtual Studio es un estudio creativo de Minecraft donde le damos vida a tus ideas y proyectos.
      </p>
      <div style={{fontSize: '2em', color: '#00eaff', marginBottom: 18, fontWeight: 700}}>
        +{count} proyectos realizados
      </div>
      <p style={{fontSize: '1.15em', color: '#b6eaff', marginBottom: 18}}>
        Aqui encontraras lo siguiente:
      </p>
      <ul className="about-list">
        {servicios.map((s, i) => (
          <li key={i}><span className="about-icon">{s.icon}</span> {s.text}</li>
        ))}
      </ul>
    </section>
  );
}
