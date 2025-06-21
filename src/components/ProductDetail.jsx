import { useParams, useNavigate } from 'react-router-dom';
import './Section.css';

const projects = [
  {
    id: 'custom-prefix',
    title: 'Custom Prefix',
    image: 'https://i.imgur.com/HuFMza7.png',
    desc: 'Un total de 10 custom prefix para tu servidor de Minecraft, con un diseño único y funcional.',
    requeriments: 'LuckPerms',
    price: 1.99
  },
  {
    id: 'custom-tab',
    title: 'Custom Tab',
    image: 'https://i.imgur.com/N3bBOeG.png',
    desc: 'Un tabulador personalizado para tu servidor de Minecraft, con un diseño único y funcional.',
    requeriments: 'TAB',
    price: 0.99
  },
  {
    id: 'jobs-gui',
    title: 'Jobs GUI',
    image: 'https://i.imgur.com/Cu6wQwT.png',
    desc: 'Un menu de trabajos personalizado para tu servidor de Minecraft, con un diseño único y funcional.',
    requeriments: 'Jobs Reborn, CommandPanels, PlaceholderAPI, Vault',
    price: 2.99
  },
  // Agrega más proyectos aquí
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = projects.find(p => p.id === id);

  if (!product) {
    return <div className="section"><h2>Producto no encontrado</h2></div>;
  }

  return (
    <section className="section product-detail">
      <button onClick={() => navigate(-1)} style={{marginBottom: 20}}>&larr; Volver</button>
      <div className="product-detail-content">
        <img src={product.image} alt={product.title} style={{maxWidth: 350, borderRadius: 12}} />
        <div className="product-detail-info">
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          {product.requeriments && <p><strong>Requisitos:</strong> {product.requeriments}</p>}
          <div className="gallery-price">
            <span className="gallery-price-currency">$</span>
            <span className="gallery-price-value">{product.price}</span>
            <span className="gallery-price-unit">USD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
