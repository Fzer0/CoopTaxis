// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { cooperativaData } from '../data/data';
import { Home } from 'lucide-react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const data = cooperativaData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: scrolled ? 'rgba(15, 15, 15, 0.95)' : 'transparent',
      padding: scrolled ? '15px 5%' : '20px 5%',
      transition: 'all 0.3s ease',
      zIndex: 1000,
      borderBottom: scrolled ? `2px solid ${data.colors.primary}` : 'none',
      backdropFilter: scrolled ? 'blur(10px)' : 'none'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Logo/Icono */}
          <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: data.colors.primary,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.5em',
            color: data.colors.backgroundDark
          }}>🚕</div>
          <div>
            <h1 style={{ fontSize: scrolled ? '1.2em' : '1.5em', margin: 0, color: data.colors.primary, transition: 'font-size 0.3s' }}>
              COOPERATIVA MANUEL CÓRDOVA GALARZA
            </h1>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {/* BOTÓN/ENLACE DE INICIO */}
          <a 
            href={data.mainPageLink} // Usa la URL de la página principal (definida en data.js)
            style={{
              // Estilos visuales del botón/enlace
              padding: '8px 15px',
              backgroundColor: data.colors.primary,
              color: data.colors.backgroundDark,    
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              // Efecto hover (opcional)
              ':hover': {
                backgroundColor: data.colors.secondary,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
              }
            }}
          >
            <Home size={20} color={data.colors.backgroundDark} /> {/* Ícono de Casa */}
            <span style={{ whiteSpace: 'nowrap' }}>Página Principal</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;