import './App.css'
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import ProductsSection from './ProductsSection';
import EventsSection from './EventsSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><HomeSection /></section>
        <section id="products"><ProductsSection /></section>
        <section id="events"><EventsSection /></section>
        <section id="services"><ServicesSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
    </>
  );
}

export default App;
