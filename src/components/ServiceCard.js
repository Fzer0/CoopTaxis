// src/components/ServiceCard.js
import React, { useState, useEffect } from 'react';
import { cooperativaData } from '../data/data';

// --- Estilos Base para la Tarjeta ---
const getCardStyle = (data, isVisible, isHovered) => ({
  backgroundColor: 'white',
  padding: '40px 30px',
  borderRadius: '15px',
  cursor: 'pointer',
  minHeight: '250px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  // Transiciones y animaciones de entrada/hover
  transition: 'all 0.5s ease',
  opacity: isVisible ? 1 : 0,
  transform: isVisible && !isHovered ? 'translateY(0)' : 
             isVisible && isHovered ? 'translateY(-10px)' : 'translateY(30px)',
  boxShadow: isHovered 
    ? '0 15px 40px rgba(255, 200, 5, 0.2)' 
    : '0 5px 20px rgba(0, 0, 0, 0.08)',
  border: isHovered 
    ? `2px solid ${data.colors.primary}` 
    : `2px solid ${data.colors.backgroundLight}`,
});

// Estilos de los elementos internos
const innerStyles = (colors) => ({
  iconWrapper: {
    width: '70px',
    height: '70px',
    backgroundColor: colors.primary,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  title: {
    fontSize: '1.3em',
    marginBottom: '15px',
    color: colors.backgroundDark,
    fontWeight: 'bold'
  },
  description: {
    fontSize: '0.95em',
    color: colors.greyMedium,
    lineHeight: '1.6'
  }
});


// Componente Tarjeta de Servicio
const ServiceCard = ({ title, description, icon: Icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const data = cooperativaData;

  useEffect(() => {
    // Animación de entrada con retardo
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  const cardStyle = getCardStyle(data, isVisible, isHovered);
  const styles = innerStyles(data.colors);

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.iconWrapper}>
        <Icon size={35} color={data.colors.backgroundDark} />
      </div>
      <h3 style={styles.title}>
        {title}
      </h3>
      <p style={styles.description}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;