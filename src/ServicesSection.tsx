import ServiceButton from './ServiceButton';

const buttonData = [
  { label: 'Gun Licences' },
  { label: 'Licence Renewals' },
  { label: 'Service 3' },
  { label: 'Service 4' },
  { label: 'Service 5' },
  { label: 'Service 6' },
];

const ServicesSection = () => (
  <div
    style={{
      position: 'relative',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '3rem 0',
      textAlign: 'center',
      zIndex: 1,
      overflow: 'hidden',
      backgroundImage: 'url(/ServicesSectionBackground.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.3)',
        zIndex: 0,
      }}
    />
    <div style={{position: 'relative', zIndex: 1, width: '100%'}}>
      <h2>Services</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '2rem auto',
        }}
      >
        {buttonData.map((btn) => (
          <ServiceButton key={btn.label} label={btn.label} />
        ))}
      </div>
    </div>
  </div>
);

export default ServicesSection; 