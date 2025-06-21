import { useState, useEffect } from 'react';

export default function AdminPanel({ onAddProject, onAdminLogin }) {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [form, setForm] = useState({ title: '', image: '', desc: '' });

  // Cambia esta contraseña por una más segura
  const ADMIN_PASS = 'sanjose2025';

  useEffect(() => {
    if (localStorage.getItem('vs_admin') === '1') setAuth(true);
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      setAuth(true);
      localStorage.setItem('vs_admin', '1');
      if (onAdminLogin) onAdminLogin();
    } else alert('Contraseña incorrecta');
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.image) return alert('Completa todos los campos');
    onAddProject(form);
    setForm({ title: '', image: '', desc: '' });
  }

  if (!auth) {
    return (
      <form onSubmit={handleLogin} style={{maxWidth: 320, margin: '40px auto', textAlign: 'center'}}>
        <h3>Panel Admin</h3>
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} style={{padding:8, borderRadius:6, border:'1px solid #00eaff', marginBottom:12, width:'100%'}} />
        <button type="submit" style={{padding:8, borderRadius:6, background:'#00eaff', color:'#0a1826', fontWeight:'bold', border:'none', width:'100%'}}>Entrar</button>
      </form>
    );
  }

  return (
    <div style={{maxWidth: 400, margin: '40px auto', background:'#122033cc', borderRadius:12, padding:24, boxShadow:'0 2px 12px #00eaff22'}}>
      <h3>Subir nuevo proyecto</h3>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Título" value={form.title} onChange={handleChange} style={{padding:8, borderRadius:6, border:'1px solid #00eaff', marginBottom:10, width:'100%'}} />
        <input name="image" placeholder="URL de imagen" value={form.image} onChange={handleChange} style={{padding:8, borderRadius:6, border:'1px solid #00eaff', marginBottom:10, width:'100%'}} />
        <textarea name="desc" placeholder="Descripción" value={form.desc} onChange={handleChange} style={{padding:8, borderRadius:6, border:'1px solid #00eaff', marginBottom:10, width:'100%'}} />
        <button type="submit" style={{padding:8, borderRadius:6, background:'#00eaff', color:'#0a1826', fontWeight:'bold', border:'none', width:'100%'}}>Agregar</button>
      </form>
    </div>
  );
}
