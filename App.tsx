
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Comparison from './components/Comparison';
import Portfolio from './components/Portfolio';
import AIVisualizer from './components/AIVisualizer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <Hero />
        <Services />
        <Comparison />
        <Portfolio />
        <AIVisualizer />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
