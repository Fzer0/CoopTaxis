// src/components/CTAButton.js
import React, { useState } from 'react';
import { cooperativaData } from '../data/data';

// Objetos de Estilo
const getButtonStyle = (data, primary, large, isHovered) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: large ? '18px 40px' : '12px 30px',
  // Lógica de color
  backgroundColor: primary ? data.colors.primary : data.colors.backgroundDark,
  color: primary ? data.colors.backgroundDark : data.colors.backgroundLight,
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: large ? '1.2em' : '1em',
  transition: 'all 0.3s ease',
  // Efectos hover
  transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
  boxShadow: isHovered 
    ? '0 10px 30px rgba(255, 200, 5, 0.3)' 
    : '0 5px 15px rgba(0, 0, 0, 0.2)',
  border: primary ? 'none' : `2px solid ${data.colors.primary}`,
});

// Componente CTAButton
const CTAButton = ({ text, icon: Icon, primary, href, large, target, rel }) => { 
  const [isHovered, setIsHovered] = useState(false);
  const data = cooperativaData;

  const style = getButtonStyle(data, primary, large, isHovered);

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style} 
    >
      {Icon && <Icon size={20} />}
      {text}
    </a>
  );
};

export default CTAButton;