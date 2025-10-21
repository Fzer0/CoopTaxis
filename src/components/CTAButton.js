// src/components/CTAButton.js
import React, { useState } from 'react';
import { cooperativaData } from '../data/data';

// Componente Botón CTA
const CTAButton = ({ text, icon: Icon, primary, href, large, target, rel }) => { 
  const [isHovered, setIsHovered] = useState(false);
  const data = cooperativaData;

  return (
    <a
      href={href}
      target={target} // <-- ¡PASAR PROPIEDAD AQUÍ!
      rel={rel}      // <-- ¡PASAR PROPIEDAD AQUÍ!
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: large ? '18px 40px' : '12px 30px',
        backgroundColor: primary ? data.colors.primary : data.colors.backgroundDark,
        color: primary ? data.colors.backgroundDark : data.colors.backgroundLight,
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: large ? '1.2em' : '1em',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 30px rgba(255, 200, 5, 0.3)' : '0 5px 15px rgba(0, 0, 0, 0.2)',
        border: primary ? 'none' : `2px solid ${data.colors.primary}`
      }}
    >
      {Icon && <Icon size={20} />}
      {text}
    </a>
  );
};

export default CTAButton;