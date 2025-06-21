import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const colors = ['#00ff99', '#fff', '#00e6e6', '#00bfff'];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    let anim;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      anim = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(anim);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-bg" />;
}
