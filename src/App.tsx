import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Areas from './components/Areas';
import Services from './components/Services';
import About from './components/About';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Areas />
      <Services />
      <About />
      <Videos />
      <Contact />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
