const WhatsAppButton = () => (
  <div style={{margin: '2rem 0', display: 'flex', justifyContent: 'center'}}>
    <a
      href="https://wa.me/27645776571"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        background: '#25D366',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        padding: '1rem 2.5rem',
        borderRadius: '2.5rem',
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        transition: 'background 0.2s',
      }}
      aria-label="Chat to us on WhatsApp"
    >
      <span role="img" aria-label="WhatsApp" style={{marginRight: '1rem', fontSize: '2rem', verticalAlign: 'middle'}}>💬</span>
      Chat to us on WhatsApp
    </a>
  </div>
);

export default WhatsAppButton; 