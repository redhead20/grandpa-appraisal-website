import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScopeExplorer from './components/ScopeExplorer';
import Services from './components/Services';
import BioCredentials from './components/BioCredentials';
import TestimonialsFAQ from './components/TestimonialsFAQ';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-root">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main>
        <Hero />
        <ScopeExplorer />
        <Services />
        <BioCredentials />
        <TestimonialsFAQ />
      </main>

      <Footer />
    </div>
  );
}
