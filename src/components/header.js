// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { cooperativaData } from '../data/data';
import { Home } from 'lucide-react';

// --- Objetos de Estilo ---
const getHeaderStyles = (data, scrolled) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  // Estilos dinámicos
  backgroundColor: scrolled ? 'rgba(15, 15, 15, 0.95)' : 'transparent',
  padding: scrolled ? '15px 5%' : '20px 5%',
  borderBottom: scrolled ? `2px solid ${data.colors.primary}` : 'none',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  // Estilos estáticos
  transition: 'all 0.3s ease',
  zIndex: 1000,
});

const styles = {
  contentWrapper: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    maxWidth: '1400px', 
    margin: '0 auto' 
  },
  logoContainer: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '15px' 
  },
  logoIcon: (colors) => ({
    width: '50px',
    height: '50px',
    backgroundColor: colors.primary,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.5em',
    color: colors.backgroundDark
  }),
  logoTitle: (scrolled, colors) => ({
    fontSize: scrolled ? '1.2em' : '1.5em', 
    margin: 0, 
    color: colors.primary, 
    transition: 'font-size 0.3s' 
  }),
  navContainer: { 
    display: 'flex', 
    gap: '20px', 
    alignItems: 'center' 
  },
  homeLink: (colors) => ({
    padding: '8px 15px',
    backgroundColor: colors.primary,
    color: colors.backgroundDark,
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    // Nota: Los estilos de hover en objetos style solo funcionan con librerías CSS-in-JS.
    // Para React nativo, se recomienda usar una hoja de estilos o el estado 'isHovered' (como en CTAButton).
    // Lo dejaré así por simplicidad, pero idealmente, esto iría en CSS externo.
  })
};


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
  
  const headerStyle = getHeaderStyles(data, scrolled);

  return (
    <header style={headerStyle}>
      <div style={styles.contentWrapper}>
        <div style={styles.logoContainer}>
          {/* Logo/Icono */}
          <div style={styles.logoIcon(data.colors)}>🚕</div>
          <div>
            <h1 style={styles.logoTitle(scrolled, data.colors)}>
              COOPERATIVA MANUEL CÓRDOVA GALARZA
            </h1>
          </div>
        </div>
        <div style={styles.navContainer}>
          {/* BOTÓN/ENLACE DE INICIO */}
          <a 
            href={data.mainPageLink}
            style={styles.homeLink(data.colors)}
          >
            <Home size={20} color={data.colors.backgroundDark} />
            <span style={{ whiteSpace: 'nowrap' }}>Página Principal</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;