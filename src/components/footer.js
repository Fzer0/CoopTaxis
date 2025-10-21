// src/components/Footer.js
import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { cooperativaData } from '../data/data'; 

function Footer() {
  const { contact, colors, name } = cooperativaData; 

  return (
    <footer style={{
      backgroundColor: colors.backgroundDark,
      color: colors.backgroundLight,
      padding: '60px 5% 30px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Columna de Contacto */}
          <div>
            <h4 style={{ color: colors.primary, marginBottom: '20px', fontSize: '1.3em' }}>
              Contacto
            </h4>
            <p style={{ marginBottom: '10px' }}>
              <MapPin size={16} style={{ display: 'inline', marginRight: '8px' }} />
              {/* ✅ ENVOLVEMOS LA DIRECCIÓN CON UN ENLACE A MAPS */}
              <a 
                href={contact.mapUrl} // Usamos la nueva URL de Maps
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: colors.backgroundLight, 
                  textDecoration: 'underline', // Destacamos que es clicable
                }}
              >
                  {contact.address}
              </a>
            </p>
            <p style={{ marginBottom: '10px' }}>
              <Phone size={16} style={{ display: 'inline', marginRight: '8px' }} />
              <a href={`tel:${contact.phoneFijo.replace(/[\s\(\)/]/g, '')}`} style={{ color: colors.backgroundLight, textDecoration: 'none' }}>
                  {contact.phoneFijo}
              </a>
            </p>
            <p style={{ marginBottom: '10px' }}>
              <MessageCircle size={16} style={{ display: 'inline', marginRight: '8px' }} />
              <a href={`https://wa.me/${contact.whatsappClaro}`} target="_blank" rel="noopener noreferrer" style={{ color: colors.backgroundLight, textDecoration: 'none' }}>
                  {contact.whatsappClaro} (Claro)
              </a>
            </p>
            <p style={{ marginBottom: '10px' }}>
              <MessageCircle size={16} style={{ display: 'inline', marginRight: '8px' }} />
              <a href={`https://wa.me/${contact.whatsappMovistar}`} target="_blank" rel="noopener noreferrer" style={{ color: colors.backgroundLight, textDecoration: 'none' }}>
                  {contact.whatsappMovistar} (Movistar)
              </a>
            </p>
            {/* Si tienes un email, descomenta esta línea y agrega el email en data.js 
            <p> 📧 <a href={`mailto:${contact.email}`} 
                style={{ color: colors.primary, textDecoration: 'none' }}>
                {contact.email}
              </a>
            </p>*/}
          </div>
          
          {/* Columna de Horarios */}
          <div>
            <h4 style={{ color: colors.primary, marginBottom: '20px', fontSize: '1.3em' }}>
              Horarios
            </h4>
            <p style={{ lineHeight: '1.8' }}>
              Lunes - Domingo: 24 Horas<br />
              Feriados: Servicio Normal<br />
              WhatsApp: Disponible siempre
            </p>
          </div>
          {/* Columna de Redes Sociales */}
          <div>
            <h4 style={{ color: colors.primary, marginBottom: '30px', fontSize: '1.3em' }}>
              Síguenos
            </h4>
            <div style={{ display: 'flex', gap: '15px' }}>
              {/* Estos enlaces deberían usar los datos de socialMedia en un proyecto real */}
              <a href="#" style={{ 
                width: '40px', height: '40px', backgroundColor: 'rgba(255, 200, 5, 0.1)', borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.primary, 
                textDecoration: 'none', transition: 'all 0.3s' }}>f</a>
              <a href="#" style={{ 
                width: '40px', height: '40px', backgroundColor: 'rgba(255, 200, 5, 0.1)', borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.primary, 
                textDecoration: 'none', transition: 'all 0.3s' }}>📷</a>
              <a href="#" style={{ 
                width: '40px', height: '40px', backgroundColor: 'rgba(255, 200, 5, 0.1)', borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.primary, 
                textDecoration: 'none', transition: 'all 0.3s' }}>X</a>
            </div>
          </div>
        </div>
        {/* Derechos de autor */}
        <div style={{
          borderTop: `1px solid ${colors.greyMedium}`,
          paddingTop: '20px',
          textAlign: 'center',
          color: colors.greyMedium,
          fontSize: '0.9em'
        }}>
          <p>&copy; {new Date().getFullYear()} {name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;