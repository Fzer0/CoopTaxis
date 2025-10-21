// src/components/ServiceCard.js
import React, { useState, useEffect } from 'react';
import { cooperativaData } from '../data/data';

// Componente Tarjeta de Servicio
const ServiceCard = ({ title, description, icon: Icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const data = cooperativaData;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '40px 30px',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.5s ease',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      border: `2px solid ${data.colors.backgroundLight}`,
      cursor: 'pointer',
      minHeight: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 200, 5, 0.2)';
      e.currentTarget.style.borderColor = data.colors.primary;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
      e.currentTarget.style.borderColor = data.colors.backgroundLight;
    }}>
      <div style={{
        width: '70px',
        height: '70px',
        backgroundColor: data.colors.primary,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <Icon size={35} color={data.colors.backgroundDark} />
      </div>
      <h3 style={{
        fontSize: '1.3em',
        marginBottom: '15px',
        color: data.colors.backgroundDark,
        fontWeight: 'bold'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '0.95em',
        color: data.colors.greyMedium,
        lineHeight: '1.6'
      }}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;