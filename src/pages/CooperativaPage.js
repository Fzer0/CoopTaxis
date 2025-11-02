import React from 'react';
import { Phone, MessageCircle, Clock, Shield, MapPin, TrendingUp, Users, Award, ChevronRight, } from 'lucide-react';

// Importa los datos
import { cooperativaData } from '../data/data';
import Header from '../components/header';
import Footer from '../components/footer';
import CTAButton from '../components/CTAButton';
import StatCard from '../components/StatCard';
import ServiceCard from '../components/ServiceCard';
import DriverCard from '../components/DriverCard';
import './CooperativaPage.css'; // Importar estilos CSS para responsive


const CooperativaPage = () => {
    const data = cooperativaData;

    // URL de la imagen de fondo (Cámbiala a tu ruta local si la importas)
    const heroImageUrl = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600";
    
    return (
        <div className="cooperativa-page" style={{
            '--primary': data.colors.primary,
            '--background-light': data.colors.backgroundLight,
            '--background-dark': data.colors.backgroundDark,
            '--grey-medium': data.colors.greyMedium
        }}>
            <Header />
            <main>
                {/* Sección Hero: Presentación principal con imagen de fondo y llamada a acción */}
                <section style={{
                    position: 'relative',
                    height: '100vh',
                    backgroundImage: `url(${heroImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1
                    }} />
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 20px',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        <div style={{
                            backgroundColor: data.colors.primary,
                            color: data.colors.backgroundDark,
                            padding: '10px 20px',
                            borderRadius: '25px',
                            display: 'inline-block',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            fontSize: '1.1em'
                        }}>
                            ✓ Servicio Certificado y Regulado
                        </div>
                        <h1 style={{
                            fontSize: '4em',
                            marginBottom: '20px',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                            Transporte <span style={{ color: data.colors.primary }}>Seguro</span> y <span style={{ color: data.colors.primary }}>Confiable</span>
                        </h1>
                        <p style={{
                            fontSize: '1.5em',
                            marginBottom: '40px',
                            maxWidth: '600px',
                            margin: '0 auto 40px',
                            lineHeight: '1.4'
                        }}>
                            Tu viaje, nuestra misión. Servicio 24 horas. ¡Seguridad y confianza en cada kilómetro!
                        </p>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{
                                backgroundColor: data.colors.primary,
                                color: data.colors.backgroundDark,
                                padding: '15px 30px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'transform 0.3s',
                                fontSize: '1.1em'
                            }}>
                                <Phone size={24} />
                                Llámanos: (02) 2352 880 / 2353 561
                            </div>

                            {/* WhatsApp Claro */}
                            <CTAButton
                                text="WhatsApp Claro"
                                icon={MessageCircle}
                                href={`https://wa.me/${data.contact.whatsappClaro}`}
                                large
                                target="_blank"
                                rel="noopener noreferrer"
                            />

                            {/* WhatsApp Movistar */}
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

                {/* SECCIÓN 2: ESTADÍSTICAS */}
                <section style={{
                    backgroundColor: data.colors.backgroundDark,
                    padding: '60px 5%',
                    borderTop: `3px solid ${data.colors.primary}`
                }}>
                    <div style={{
                        maxWidth: '1400px', margin: '0 auto', display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px'
                    }}>
                        <StatCard number="24/7" label="Disponibilidad" icon={Clock} />
                        <StatCard number="50+" label="Viajes Diarios" icon={TrendingUp} />
                        <StatCard number="100%" label="Certificados" icon={Award} />
                        <StatCard number="10+" label="Años de Experiencia" icon={Users} />
                    </div>
                </section>

                {/* SECCIÓN 3: SERVICIOS */}
                <section style={{ padding: '100px 5%', backgroundColor: data.colors.backgroundLight }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: '3em', marginBottom: '15px', color: data.colors.backgroundDark, fontWeight: 'bold'
                        }}>
                            Nuestros Servicios
                        </h2>
                        <p style={{
                            fontSize: '1.2em', color: data.colors.greyMedium, marginBottom: '60px',
                            maxWidth: '700px', margin: '0 auto 60px'
                        }}>
                            Ofrecemos soluciones de transporte adaptadas a tus necesidades
                        </p>
                        <div style={{
                            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'
                        }}>
                            <ServiceCard title="Servicio Urbano"
                                description="Transporte dentro de la ciudad, puerta a puerta. Disponible las 24 horas del día."
                                icon={MapPin} index={0} />
                            <ServiceCard title="Mensajería Express"
                                description="Entrega de paquetes y encomiendas con seguro incluido."
                                icon={Shield} index={2} />
                            <ServiceCard title="Rutas Seguras"
                                description="Viaja a cualquier parte con conductores certificados"
                                icon={Award} index={4} />
                        </div>
                    </div>
                </section>

                {/* SECCIÓN 4: MISIÓN Y VISIÓN */}
                <section style={{
                    padding: '100px 5%', backgroundColor: data.colors.backgroundDark,
                    background: `linear-gradient(135deg, ${data.colors.backgroundDark} 0%, #1a1a1a 100%)`
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: '3em', textAlign: 'center', marginBottom: '60px', color: data.colors.primary, fontWeight: 'bold'
                        }}>
                            Nuestros Pilares
                        </h2>

                        {/* Contenedor de Misión y Visión */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', marginBottom: '60px' }}>
                            <div style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '15px',
                                borderLeft: `5px solid ${data.colors.primary}`
                            }}>
                                <h3 style={{ fontSize: '2em', color: data.colors.primary, marginBottom: '20px', fontWeight: 'bold' }}>Misión</h3>
                                <p style={{ fontSize: '1.1em', lineHeight: '1.8', color: data.colors.backgroundLight }}>{data.identity.mision}</p>
                            </div>
                            <div style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '15px',
                                borderLeft: `5px solid ${data.colors.primary}`
                            }}>
                                <h3 style={{ fontSize: '2em', color: data.colors.primary, marginBottom: '20px', fontWeight: 'bold' }}>Visión</h3>
                                <p style={{ fontSize: '1.1em', lineHeight: '1.8', color: data.colors.backgroundLight }}>{data.identity.vision}</p>
                            </div>
                        </div>

                        {/* Contenedor de Objetivos (NUEVA SECCIÓN) */}
                        <div style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.08)', // Fondo ligeramente más claro
                            padding: '40px',
                            borderRadius: '15px',
                            borderTop: `5px solid ${data.colors.primary}`
                        }}>
                            <h3 style={{ fontSize: '2em', color: data.colors.primary, marginBottom: '30px', fontWeight: 'bold', textAlign: 'center' }}>
                                Objetivos Estratégicos
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '15px'
                            }}>
                                {data.identity.objetivos.map((objetivo, index) => (
                                    <li key={index} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        fontSize: '1.1em',
                                        color: data.colors.backgroundLight,
                                        lineHeight: '1.6'
                                    }}>
                                        <ChevronRight size={20} color={data.colors.primary} style={{ marginRight: '10px', marginTop: '3px' }} />
                                        {objetivo}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </section>

                {/* SECCIÓN 5: CONDUCTORES Y FLOTA */}
                <section style={{ padding: '100px 5%', backgroundColor: data.colors.backgroundLight }}>
                    <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: '3em', marginBottom: '15px', color: data.colors.backgroundDark, fontWeight: 'bold'
                        }}>
                            {data.driverInfo.title}
                        </h2>
                        <p style={{
                            fontSize: '1.2em', color: data.colors.greyMedium, marginBottom: '60px',
                            maxWidth: '700px', margin: '0 auto 60px'
                        }}>
                            {data.driverInfo.subtitle}
                        </p>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Rejilla adaptable
                            gap: '30px'
                        }}>
                            {/* Mapea los datos de los conductores */}
                            {data.driverInfo.drivers.map((driver, index) => (
                                <DriverCard key={index} driver={driver} />
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* SECCIÓN 6: CTA FINAL */}
                <section style={{ padding: '80px 5%', backgroundColor: data.colors.primary, textAlign: 'center' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: '3em', color: data.colors.backgroundDark, marginBottom: '10px', fontWeight: 'bold'
                        }}>
                            ¿Listo para tu próximo viaje?
                        </h2>
                        <p style={{
                            fontSize: '1.2em', color: data.colors.backgroundDark, marginBottom: '40px', fontWeight: '500'
                        }}>
                            Contáctanos ahora y reserva tu taxi en segundos:
                        </p>

                        {/* IMAGEN DE LA FLOTA Y CONDUCTORES */}
                        <div style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
                            marginTop: '20px', // Espacio después de los botones
                            maxWidth: '900px',
                            margin: '20px auto 0 auto' // Centrar la imagen
                        }}>
                            <img
                                src={data.photos.find(p => p.name === 'Equipo').url} // Usaremos el nombre 'Equipo'
                                alt="Equipo de la Cooperativa Manuel Córdova Galarza"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block'
                                }}
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