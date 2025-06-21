import { useEffect, useRef } from 'react';
import './Section.css';

const team = [
  { nombre: 'DKR', rol: 'Fundador', img: 'https://i.imgur.com/ZJph2as.png', desc: 'Desarrollador FullStack y experto en multiples áreas.' },
  { nombre: 'Yesith', rol: 'Fundador', img: 'https://i.imgur.com/wB4PfKB.png', desc: 'Configurador de plugins.' },
  { nombre: 'Fabito', rol: 'Fundador', img: 'https://i.imgur.com/Y4uLvuj.png', desc: 'Manager y Configurador de discord.' },
  { nombre: 'Sebastian', rol: 'Desarrollador', img: 'https://i.imgur.com/EKFt8OA.png', desc: 'Configurador de plugins y desarrollador Web.' },
  { nombre: 'ᴛᴇᴛ', rol: 'Builder', img: 'https://i.imgur.com/dNVJdSp.png', desc: 'Experto en Construcción.' }
];

export default function Team() {
  const sectionRef = useRef();

  useEffect(() => {
    sectionRef.current.style.opacity = 0;
    setTimeout(() => {
      sectionRef.current.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1)';
      sectionRef.current.style.opacity = 1;
    }, 200);
  }, []);

  // Efecto hover 3D
  useEffect(() => {
    const cards = document.querySelectorAll('.team-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.transform = `rotateY(${(x/rect.width-0.5)*16}deg) rotateX(${(0.5-y/rect.height)*16}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
    return () => {
      cards.forEach(card => {
        card.onmousemove = null;
        card.onmouseleave = null;
      });
    };
  }, []);

  return (
    <section className="section team" ref={sectionRef}>
      <h2>Nuestro Equipo</h2>
      <div className="team-cards">
        {team.map((m, i) => (
          <div className="team-card" key={i}>
            <div className="team-img-glow">
              <img src={m.img} alt={m.nombre} />
            </div>
            <h3>{m.nombre}</h3>
            <p className="team-rol">{m.rol}</p>
            <p className="team-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
