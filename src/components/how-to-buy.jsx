import './Section.css';

export default function HowToBuy() {
  return (
    <section className="section how-to-buy">
      <h2>¿Cómo comprar?</h2>
      <ol className="how-to-buy-list">
        <li>
          <strong>Explora la galería:</strong> Elige el producto que te interesa y haz clic en <span style={{color:'#00eaff'}}>"Ver más"</span> para ver los detalles.
        </li>
        <li>
          <strong>Contáctanos:</strong> En la página del producto encontrarás un botón o enlace para contactarnos por Discord, Instagram o correo electrónico.
        </li>
        <li>
          <strong>Realiza el pago:</strong> Te indicaremos los métodos de pago disponibles (PayPal, MercadoPago, etc.) y los pasos a seguir.
        </li>
        <li>
          <strong>Recibe tu producto:</strong> Una vez confirmado el pago, recibirás tu producto digital y soporte personalizado.
        </li>
      </ol>
      <div className="how-to-buy-contact">
        <p>¿Tienes dudas? <a href="/contact" style={{color:'#00eaff', textDecoration:'underline'}}>Contáctanos aquí</a>.</p>
      </div>
    </section>
  );
}
