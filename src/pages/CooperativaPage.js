// src/pages/CooperativaPage.js
import React from 'react';
import { 
  Phone, MessageCircle, Clock, Shield, MapPin, TrendingUp, Users, Award, ChevronRight 
} from 'lucide-react';

// Importa el CSS que crearemos
import './CooperativaPage.css'; 

// Importa los componentes y datos
import { cooperativaData } from '../data/data';
import Header from '../components/Header'; // Asumo Header.js
import Footer from '../components/Footer'; // Asumo Footer.js
import CTAButton from '../components/CTAButton';
import StatCard from '../components/StatCard';
import ServiceCard from '../components/ServiceCard';
import DriverCard from '../components/DriverCard';


const CooperativaPage = () => {
    const data = cooperativaData;
    
    // URL de la imagen de fondo (Cámbiala a tu ruta local si la importas)
    const heroImageUrl = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600";
    
    // Limpiar el teléfono fijo para el enlace 'tel:'
    const cleanPhone = data.contact.phoneFijo.replace(/[\s()/-]/g, '');

    return (
        <div className="cooperativa-page" style={{
            '--primary': data.colors.primary,
            '--background-light': data.colors.backgroundLight,
            '--background-dark': data.colors.backgroundDark,
            '--grey-medium': data.colors.greyMedium
        }}>
            <Header />
            <main>
                {/* 1. Sección Hero */}
                <section className="hero-section" style={{ 
                    backgroundImage: `url(${heroImageUrl})` 
                }}>
                    <div className="hero-overlay" />
                    <div className="hero-content">
                        <div className="certified-badge">
                            ✓ Servicio Certificado y Regulado
                        </div>
                        <h1 className="hero-title">
                            Transporte <span>Seguro</span> y <span>Confiable</span>
                        </h1>
                        <p className="hero-description">
                            {data.slogan}
                        </p>
                        <div className="hero-buttons">
                            <a 
                                href={`tel:${cleanPhone}`} 
                                className="phone-button"
                            >
                                <Phone size={24} />
                                Llámanos: {data.contact.phoneFijo}
                            </a>

                            {/* CTA Buttons */}
                            <CTAButton
                                text="WhatsApp Claro"
                                icon={MessageCircle}
                                href={`https://wa.me/${data.contact.whatsappClaro}`}
                                large
                                primary
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                            <CTAButton
                                text="WhatsApp Movistar"
                                icon={MessageCircle}
                                href={`https://wa.me/${data.contact.whatsappMovistar}`}
                                large
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                        </div>
                    </div>
                </section>

                {/* 2. SECCIÓN: ESTADÍSTICAS */}
                <section className="stats-section">
                    <div className="stats-grid container">
                        <StatCard number="24/7" label="Disponibilidad" icon={Clock} />
                        <StatCard number="50+" label="Viajes Diarios" icon={TrendingUp} />
                        <StatCard number="100%" label="Certificados" icon={Award} />
                        <StatCard number="10+" label="Años de Experiencia" icon={Users} />
                    </div>
                </section>

                {/* 3. SECCIÓN: SERVICIOS */}
                <section className="services-section">
                    <div className="services-container container">
                        <h2 className="section-title">Nuestros Servicios</h2>
                        <p className="section-subtitle">Ofrecemos soluciones de transporte adaptadas a tus necesidades</p>
                        <div className="services-grid">
                            <ServiceCard title="Servicio Urbano" description="Transporte dentro de la ciudad, puerta a puerta. Disponible las 24 horas del día." icon={MapPin} index={0} />
                            <ServiceCard title="Mensajería Express" description="Entrega de paquetes y encomiendas con seguro incluido." icon={Shield} index={2} />
                            <ServiceCard title="Rutas Seguras" description="Viaja a cualquier parte con conductores certificados" icon={Award} index={4} />
                        </div>
                    </div>
                </section>

                {/* 4. SECCIÓN: MISIÓN Y VISIÓN */}
                <section className="mission-vision-section">
                    <div className="container">
                        <h2 className="mv-title section-title">Nuestros Pilares</h2>

                        {/* Misión y Visión */}
                        <div className="mv-grid">
                            <div className="mv-card">
                                <h3>Misión</h3>
                                <p>{data.identity.mision}</p>
                            </div>
                            <div className="mv-card">
                                <h3>Visión</h3>
                                <p>{data.identity.vision}</p>
                            </div>
                        </div>

                        {/* Objetivos */}
                        <div className="objectives-container">
                            <h3 className="section-subtitle">Objetivos Estratégicos</h3>
                            <ul className="objective-list">
                                {data.identity.objetivos.map((objetivo, index) => (
                                    <li key={index} className="objective-item">
                                        <ChevronRight size={20} color={data.colors.primary} style={{ marginRight: '10px', marginTop: '3px' }} />
                                        {objetivo}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 5. SECCIÓN: CONDUCTORES Y FLOTA */}
                <section className="services-section">
                    <div className="services-container container">
                        <h2 className="section-title">{data.driverInfo.title}</h2>
                        <p className="section-subtitle">{data.driverInfo.subtitle}</p>
                        <div className="services-grid">
                            {/* Mapea los datos de los conductores */}
                            {data.driverInfo.drivers.map((driver, index) => (
                                <DriverCard key={index} driver={driver} />
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* 6. SECCIÓN: CTA FINAL */}
                <section className="cta-section">
                    <div className="container">
                        <h2 className="cta-title">¿Listo para tu próximo viaje?</h2>
                        <p className="cta-subtitle">Contáctanos ahora y reserva tu taxi en segundos:</p>

                        {/* Contenedor para la imagen */}
                        <div className="cta-image-container">
                            <img
                                src={data.photos.find(p => p.name === 'Equipo').url}
                                alt="Equipo de la Cooperativa Manuel Córdova Galarza"
                            />
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    );
};

export default CooperativaPage;