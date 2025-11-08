import React from 'react';
import { 
  Phone, MessageCircle, Clock, Shield, MapPin, TrendingUp, Users, Award, ChevronRight 
} from 'lucide-react';
import './CooperativaPage.css'; 
import { cooperativaData } from '../data/data';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import CTAButton from '../components/CTAButton';
import StatCard from '../components/StatCard';
import ServiceCard from '../components/ServiceCard';
import DriverCard from '../components/DriverCard';
import nuevoFondoHero from '../assets/imagen/fondo.jpeg';

const CooperativaPage = () => {
    const data = cooperativaData;
    const heroImageUrl = nuevoFondoHero;
    const cleanPhone = data.contact.phoneFijo.replace(/[\s()/-]/g, '');
    const photoEquipoFlota = data.photos.find(p => p.name === 'Equipo Flota');

    return (
        <div className="cooperativa-page" style={{
            // variables CSS para el diseno de la página
            '--primary': data.colors.primary,
            '--background-light': data.colors.backgroundLight,
            '--background-dark': data.colors.backgroundDark,
            '--grey-medium': data.colors.greyMedium
        }}>
            <Header />
            <main>
                {/* Sección Hero */}
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

                            <CTAButton
                                text="WhatsApp Claro"
                                icon={MessageCircle}
                                href={`https://wa.me/${data.contact.whatsappClaro}`}
                                large
                                primary
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button"
                            />
                            <CTAButton
                                text="WhatsApp Movistar"
                                icon={MessageCircle}
                                href={`https://wa.me/${data.contact.whatsappMovistar}`}
                                large
                                primary
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button"
                            />
                        </div>
                    </div>
                </section>

                {/* SECCIÓN: ESTADISTICAS */}
                <section className="stats-section">
                    <div className="stats-grid container">
                        <StatCard number="24/7" label="Disponibilidad" icon={Clock} />
                        <StatCard number="50+" label="Viajes Diarios" icon={TrendingUp} />
                        <StatCard number="100%" label="Certificados" icon={Award} />
                        <StatCard number="33+" label="Años de Experiencia" icon={Users} />
                    </div>
                </section>

                {/* SECCIÓN: SERVICIOS */}
                <section className="services-section">
                    <div className="services-container container">
                        <h2 className="section-title">Nuestra Gama de Servicios</h2>
                        <p className="section-subtitle">Soluciones de transporte pensando en su seguridad, comodidad y rapidez, servicio dentro y fuera de la ciudad</p>
                        <div className="services-grid">
                            {/* Servicio Inmediato */}
                            <ServiceCard 
                                title="Movilización Inmediata" 
                                description="Nuestros servicios 24 horas, puerta a puerta viajes ✈️ tours programados, dentro y fuera de la ciudad" 
                                icon={MapPin} 
                                index={0} 
                            />
                            
                            {/* Servicio Mensajería */}
                            <ServiceCard 
                                title="Mensajería Expresa y Confiable" 
                                description="Gestión segura de paquetería y documentos urgentes. Sus envíos son manejados con la máxima discreción y garantía de entrega." 
                                icon={Shield} 
                                index={1} 
                            />
                            
                            {/* Servicio Rutas */}
                            <ServiceCard 
                                title="Viajes Ejecutivos y Encomiendas Especiales" 
                                description="Traslados de largo recorrido o programados con nuestra flota premium y conductores de alta experiencia para un viaje sin preocupaciones." 
                                icon={Award} 
                                index={2}
                            />                            
                        </div>
                    </div>
                </section>

                {/* SECCIÓN: MISIÓN Y VISIÓN */}
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

                {/* SECCIÓN: CONDUCTORES Y DATOS */}
                <section className="services-section driver-info-section">
                    <div className="services-container container">
                        <h2 className="section-title">{data.driverInfo.title}</h2>
                        <p className="section-subtitle">{data.driverInfo.subtitle}</p>
                        {photoEquipoFlota && (
                            <div className="driver-photo-middle">
                                <img
                                    src={photoEquipoFlota.url}
                                    alt="Equipo"
                                />
                            </div>
                        )} 
                        {/* Grid de tarjetas de conductores */}
                        <div className="services-grid" style={{ marginTop: '60px' }}>
                            {data.driverInfo.drivers.map((driver, index) => (
                                <DriverCard key={index} driver={driver} />
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* SECCIÓN: CTA FINAL */}
                <section className="cta-section">
                    <div className="container">
                        <h2 className="cta-title">¿Listo para tu próximo viaje?</h2>
                        <p className="cta-subtitle">Contáctanos ahora y reserva tu taxi en segundos:</p>

                        {/* Contenedor para la imagen del equipo*/}
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