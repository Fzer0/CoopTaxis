import React from 'react';
import { cooperativaData } from '../data/data';

// Componente Estadística
const StatCard = ({ number, label, icon: Icon }) => {
    const data = cooperativaData;
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <Icon size={40} color={data.colors.primary} style={{ marginBottom: '15px' }} />
            <div style={{ fontSize: '3em', fontWeight: 'bold', color: data.colors.primary, marginBottom: '5px' }}>
                {number}
            </div>
            <div style={{ fontSize: '1.1em', color: data.colors.backgroundLight }}>
                {label}
            </div>
        </div>
    );
};

export default StatCard;