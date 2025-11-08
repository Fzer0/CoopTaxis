import React from 'react';
import { Shield } from 'lucide-react'; 
import { cooperativaData } from '../data/data';

const DriverCard = ({ driver }) => {
  const data = cooperativaData;

  // Objetos de Estilo
  const styles = {
    image: {
      backgroundImage: `url(${driver.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '350px',
      borderRadius: '10px 10px 0 0',
      filter: 'brightness(85%)',
    },
    // Estilo principal de la tarjeta
    card: {
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      overflow: 'hidden',
      flex: '1 1 280px',
      cursor: 'pointer',
    },
    content: {
      padding: '10px',
    },
    title: {
      fontSize: '1.3em', 
      color: data.colors.backgroundDark, 
      marginBottom: '5px' 
    },
    details: {
      fontSize: '0.9em', 
      color: data.colors.greyMedium, 
      lineHeight: '1.4', 
      marginBottom: '15px' 
    },
    verified: {
      display: 'flex', 
      alignItems: 'center', 
      color: data.colors.primary, 
      fontSize: '0.9em' 
    }
  };

  // Manejadores de Hover
  const handleHover = (e, isHovering) => {
    e.currentTarget.style.transform = isHovering ? 'translateY(-5px)' : 'translateY(0)';
    e.currentTarget.style.boxShadow = isHovering 
      ? '0 12px 25px rgba(255, 200, 5, 0.3)' 
      : '0 8px 20px rgba(0, 0, 0, 0.1)';
  };

  return (
    <div 
      style={styles.card}
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
    >
      {/* Foto del conductor/vehículo */}
      <div style={styles.image}></div>

      {/* Contenido de la tarjeta */}
      <div style={styles.content}>
        <h3 style={styles.title}>
          {driver.name}
        </h3>
        <p style={styles.details}>
          {driver.details}
        </p>
        <div style={styles.verified}>
          <Shield size={18} style={{ marginRight: '8px' }} />
          <span style={{ fontWeight: 'bold' }}>Verificado</span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;