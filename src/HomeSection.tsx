const HomeSection = () => (
  <div
    style={{
      position: 'relative',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '6rem 0',
      textAlign: 'center',
      zIndex: 1,
      overflow: 'hidden',
      backgroundImage: 'url(/HomeSectionBackground.jpg)',
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
    <div style={{
      position: 'relative',
      padding: '2rem',
      borderRadius: '1rem',
      maxWidth: '90vw',
      zIndex: 1,
      color: '#fff',
    }}>
      <h2>Home</h2>
      <p>Welcome to Umhlanga Arms! This is the home section.</p>
    </div>
  </div>
);

export default HomeSection; 