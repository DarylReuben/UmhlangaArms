import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="eca-navbar">
      <div className="eca-navbar__logo">
        <img src="/Logo.png" alt="Umhlanga Arms Logo" style={{height: '2rem', verticalAlign: 'middle', marginRight: '0.5rem'}} />
        Umhlanga Arms
      </div>
      <div className="eca-navbar__links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#events">Events</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 