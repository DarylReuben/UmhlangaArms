const GoogleMapEmbed = () => (
  <div style={{maxWidth: '600px', margin: '2rem auto', width: '100%'}}>
    <a
      href="https://www.google.com/maps/place/56+Pine+Grove,+Parkhill,+Durban+North"
      target="_blank"
      rel="noopener noreferrer"
      style={{display: 'block', borderRadius: '1rem', overflow: 'hidden'}}
      title="Open in Google Maps"
    >
      <iframe
        title="Google Map - 56 Pine Grove, Parkhill, Durban North"
        src="https://www.google.com/maps?q=56+Pine+Grove,+Parkhill,+Durban+North&output=embed"
        width="100%"
        height="350"
        style={{border:0, borderRadius: '1rem', pointerEvents: 'none'}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </a>
  </div>
);

export default GoogleMapEmbed; 