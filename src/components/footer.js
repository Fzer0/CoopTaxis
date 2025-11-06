// src/components/Footer.js
import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { cooperativaData } from '../data/data'; 

function Footer() {
  const { contact, colors, name } = cooperativaData; 

  // La expresión regular limpia el número de teléfono para el enlace 'tel:'.
  const cleanPhone = contact.phoneFijo.replace(/[\s()/-]/g, '');

  // --- Objetos de Estilo ---
  const styles = {
 footer: {
  backgroundColor: colors.backgroundDark,
  color: colors.backgroundLight,
  padding: '60px 5% 30px'
 },
 contentWrapper: {
  maxWidth: '1400px', 
  margin: '0 auto' 
 },
 grid: {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '40px',
  marginBottom: '40px'
 },
 heading: { 
  color: colors.primary, 
  marginBottom: '20px', 
 fontSize: '1.3em' 
 },
 contactItem: { 
  marginBottom: '10px' 
 },
 link: { 
  color: colors.backgroundLight, 
  textDecoration: 'none' 
 },
 addressLink: { 
  color: colors.backgroundLight, 
  textDecoration: 'underline', 
 },
 hours: { 
  lineHeight: '1.8' 
 },
    // El estilo socialContainer también fue eliminado ya que no se usaba.
 copyright: {
  borderTop: `1px solid ${colors.greyMedium}`,
  paddingTop: '20px',
 textAlign: 'center',
  color: colors.greyMedium,
  fontSize: '0.9em'
 }
 };

 return (
 <footer style={styles.footer}>
  <div style={styles.contentWrapper}>
  <div style={styles.grid}>
   {/* Columna de Contacto */}
   <div>
   <h4 style={styles.heading}>Contacto</h4>
   <p style={styles.contactItem}>
    <MapPin size={16} style={{ display: 'inline', marginRight: '8px' }} />
    <a 
    href={contact.mapUrl} 
    target="_blank" 
    rel="noopener noreferrer" 
    style={styles.addressLink}
    >
    {contact.address}
    </a>
   </p>
   <p style={styles.contactItem}>
    <Phone size={16} style={{ display: 'inline', marginRight: '8px' }} />
    <a href={`tel:${cleanPhone}`} style={styles.link}>
    {contact.phoneFijo}
    </a>
   </p>
   <p style={styles.contactItem}>
    <MessageCircle size={16} style={{ display: 'inline', marginRight: '8px' }} />
    <a href={`https://wa.me/${contact.whatsappClaro}`} target="_blank" rel="noopener noreferrer" style={styles.link}>
    {contact.whatsappClaro} (Claro)
    </a>
   </p>
   <p style={styles.contactItem}>
    <MessageCircle size={16} style={{ display: 'inline', marginRight: '8px' }} />
    <a href={`https://wa.me/${contact.whatsappMovistar}`} target="_blank" rel="noopener noreferrer" style={styles.link}>
    {contact.whatsappMovistar} (Movistar)
    </a>
   </p>
   </div>
   
   {/* Columna de Horarios */}
   <div>
 <h4 style={styles.heading}>Horarios</h4>
 <p style={styles.hours}>
 Lunes - Domingo: 24 Horas<br />
 Feriados: Servicio Normal<br />
 WhatsApp: Disponible siempre
 </p>
 </div>

       {/* Columna de Redes Sociales (Vacía) */}
     </div>
       {/* Derechos de autor */}
     <div style={styles.copyright}>
       <p>© {new Date().getFullYear()} {name}. Todos los derechos reservados.</p>
     </div>
   </div>
 </footer>
 );
}

export default Footer;