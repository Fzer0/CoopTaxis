// src/components/DriverCard.js
import React from 'react';
// CORRECCIÓN: SOLO importa 'Shield', eliminando 'DriverIcon'
import { Shield } from 'lucide-react'; 
import { cooperativaData } from '../data/data';

const DriverCard = ({ driver }) => {
    const data = cooperativaData;
    
    // El estilo inline para cargar la imagen de fondo de la tarjeta
    const imageStyle = {
        backgroundImage: `url(${driver.photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        borderRadius: '10px 10px 0 0',
        filter: 'brightness(85%)', // Oscurece un poco la imagen
    };

    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            overflow: 'hidden',
            flex: '1 1 280px', // Permite que se ajusten bien en la grilla
            cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 25px rgba(255, 200, 5, 0.3)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
        }}>
            {/* Foto del conductor/vehículo */}
            <div style={imageStyle}></div>

            {/* Contenido de la tarjeta */}
            <div style={{ padding: '10px' }}>
                <h3 style={{ 
                    fontSize: '1.3em', 
                    color: data.colors.backgroundDark, 
                    marginBottom: '5px' 
                }}>
                    {driver.name}
                </h3>
                <p style={{ 
                    fontSize: '0.9em', 
                    color: data.colors.greyMedium, 
                    lineHeight: '1.4', 
                    marginBottom: '15px' 
                }}>
                    {driver.details}
                </p>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: data.colors.primary, 
                    fontSize: '0.9em' 
                }}>
                    {/* El ícono Shield sí se usa y está correctamente importado */}
                    <Shield size={18} style={{ marginRight: '8px' }} />
                    <span style={{ fontWeight: 'bold' }}>Verificado</span>
                </div>
            </div>
        </div>
    );
};

export default DriverCard;