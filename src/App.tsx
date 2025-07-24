import './App.css'
import React, { useState } from 'react';
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import ProductsSection from './ProductsSection';
import EventsSection from './EventsSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <Navbar onAdminChange={setIsAdmin} />
      <main>
        <section id="home"><HomeSection isAdmin={isAdmin} /></section>
        <section id="products"><ProductsSection /></section>
        {/* <section id="events"><EventsSection /></section> */}
        <section id="services"><ServicesSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
    </>
  );
};

export default App;
