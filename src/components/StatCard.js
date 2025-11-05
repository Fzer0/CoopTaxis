// src/components/StatCard.js
import React from 'react';
import { cooperativaData } from '../data/data';

// --- Objetos de Estilo ---
const styles = (colors) => ({
  card: { 
    textAlign: 'center', 
    padding: '20px' 
  },
  icon: { 
    marginBottom: '15px' 
  },
  number: { 
    fontSize: '3em', 
    fontWeight: 'bold', 
    color: colors.primary, 
    marginBottom: '5px' 
  },
  label: { 
    fontSize: '1.1em', 
    color: colors.backgroundLight 
  }
});

// Componente Estadística
const StatCard = ({ number, label, icon: Icon }) => {
  const data = cooperativaData;
  const currentStyles = styles(data.colors);

  return (
    <div style={currentStyles.card}>
      <Icon size={40} color={data.colors.primary} style={currentStyles.icon} />
      <div style={currentStyles.number}>
        {number}
      </div>
      <div style={currentStyles.label}>
        {label}
      </div>
    </div>
  );
};

export default StatCard;