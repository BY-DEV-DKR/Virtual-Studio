import { useEffect, useRef, useState } from 'react';
import './Section.css';

export default function Home() {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const [novedades] = useState([
    {
      titulo: '¡Nuevo producto!',
      descripcion: 'Lanzamos un nuevo producto para Minecraft (Jobs GUI). ¡Mejora tu servidor!',
      fecha: '20 Junio 2025',
    },
  ]);

  useEffect(() => {
    // Animación de aparición de título y subtítulo
    titleRef.current.style.opacity = 0;
    subtitleRef.current.style.opacity = 0;
    setTimeout(() => {
      titleRef.current.style.transition = 'opacity 1s cubic-bezier(.77,0,.18,1)';
      titleRef.current.style.opacity = 1;
    }, 200);
    setTimeout(() => {
      subtitleRef.current.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1)';
      subtitleRef.current.style.opacity = 1;
    }, 700);
  }, []);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = e => {
      const section = document.querySelector('.home');
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      section.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="section home" style={{
      background: "linear-gradient(120deg, #232526 60%, #00ff99 120%)",
      backgroundImage: "url('https://i.imgur.com/1.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '60vh',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
    }}>
      <h1 ref={titleRef} style={{
        fontSize: '3.2em',
        fontFamily: 'Orbitron, Arial, sans-serif',
        color: '#00eaff',
        letterSpacing: '2px',
        marginBottom: '0.2em',
        textShadow: '0 4px 24px #000a'
      }}>
        ¡Bienvenido a Virtual Studio!
      </h1>
      <p ref={subtitleRef} style={{
        fontSize: '1.5em',
        color: '#fff',
        maxWidth: 600,
        margin: '0 auto',
        textShadow: '0 2px 12px #000a'
      }}>
        El estudio creativo de Minecraft donde le damos vida a tus proyectos.
      </p>
      <div className="glow-circle" />
      {/* Novedades */}
      <div style={{
        background: 'rgba(18,32,51,0.85)',
        borderRadius: 14,
        margin: '40px auto 0',
        maxWidth: 600,
        boxShadow: '0 2px 12px #00eaff33',
        padding: '24px 18px',
        border: '1.5px solid #00eaff33',
        backdropFilter: 'blur(2.5px)'
      }}>
        <h2 style={{
          color: '#00eaff',
          fontFamily: 'Orbitron, Arial, sans-serif',
          fontSize: '2em',
          marginBottom: 18
        }}>Novedades</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {novedades.map((n, i) => (
            <li key={i} style={{
              marginBottom: 18,
              padding: '12px 0',
              borderBottom: i !== novedades.length - 1 ? '1px solid #00eaff22' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}>
              <span style={{ fontWeight: 600, color: '#fff', fontSize: '1.1em' }}>{n.titulo}</span>
              <span style={{ color: '#b2f7ef', fontSize: '0.98em' }}>{n.descripcion}</span>
              <span style={{ color: '#00eaff99', fontSize: '0.92em', alignSelf: 'flex-end' }}>{n.fecha}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
