// src/data/data.js
// 1. Importaciones de imágenes
import con1 from '../assets/imagen/con1.jpeg';
import con2 from '../assets/imagen/con2.jpeg';
import con4 from '../assets/imagen/con4.jpeg';
import con5 from '../assets/imagen/con5.jpeg';
import photoEquipo from '../assets/imagen/principal1.jpeg';

/**
 * Datos de la COOPERATIVA EN TAXIS MANUEL CÓRDOVA GALARZA
 */
export const cooperativaData = {
    name: "COOPERATIVA DE TAXIS MANUEL CÓRDOVA GALARZA",
    slogan: "Tu viaje, nuestra misión. Servicio 24 horas. ¡Seguridad y confianza en cada kilómetro!",
    mainPageLink: "/", 
    
    // --- Información de Contacto ---
    contact: {
        phoneFijo: "(02) 2352 880 / 2353 561",
        whatsappMovistar: "593983950288",
        whatsappClaro: "593989131819",
        mapUrl: "https://maps.app.goo.gl/TZ7Rt8dwuBns4icp8",
        address: "Av. Manuel Córdova Galarza, Pomasqui, Quito.",
    },
    
    // --- Identidad Corporativa ---
identity: {
    mision: "Proporcionar un servicio de transporte excepcional en Pomasqui, centrado en la seguridad total, la fiabilidad operativa y la comodidad superior de nuestros usuarios, fomentando una relación de confianza duradera.",
    
    vision: "Convertirnos en la cooperativa de taxis de referencia y liderazgo en el sector de Pomasqui. Buscamos ser la primera elección y la más valorada tanto por nuestra comunidad de clientes como por nuestros socios conductores.",
    
    objetivos: [
        // Manteniendo los objetivos mejorados de la respuesta anterior
        "Asegurar la total disponibilidad de nuestra flota (24 horas al día, 7 días a la semana) para atender todas las solicitudes, incluyendo días festivos y eventos especiales.",
        "Implementar soluciones tecnológicas para expandir y optimizar la cobertura de nuestros servicios, llegando a nuevas áreas dentro del cantón.",
        "Mantener un índice de satisfacción del cliente superior al 95%, medido a través de encuestas post-servicio y métricas de calidad.",
        "Garantizar que el 100% de nuestros socios conductores aprueben los módulos de capacitación anual en seguridad vial y atención al cliente."
    ],
},
    
    // --- Políticas de la Cooperativa ---
    policies: "Nuestras políticas se centran en la seguridad del pasajero...",
    colors: {
        primary: '#FFC805',
        secondary: '#EDB900',
        backgroundDark: '#0F0F0F',
        backgroundLight: '#F7F7F7',
        greyMedium: '#6D6D6D',
    },

    // --- Redes Sociales (INSTANCIA ÚNICA Y CORRECTA) ---
    socialMedia: {
        facebook: "https://www.facebook.com/photo/?fbid=156548693678036&set=p.156548693678036",
        instagram: "https://instagram.com/taxis_cordova_oficial",
        twitter: "https://x.com/PopBase",
    },
    
    // LA INSTANCIA DUPLICADA SE HA ELIMINADO AQUÍ.
    
    photos: [
        { name: 'Flota', url: '/assets/imagen/taxi.png' }, 
        { name: 'Equipo', url: photoEquipo }, 
    ],
    // --- Fotos de Conductores ---
    driverInfo: {
        title: "Conoce a Nuestros Conductores Certificados",
        subtitle: "Profesionales al volante, comprometidos con tu seguridad y comodidad.",
        drivers: [
            {
                    name: "Confianza",
                details: "Ofrecemos a nuestros clientes un servicio de transporte transparente, fiable y honesto, respaldado por conductores de trayectoria.",
                photo: con1 // Usar la variable de foto o ícono que tenías
            },
            {
                name: "Seguridad",
                details: "Garantizamos viajes protegidos, asegurando que cada cliente sea tratado con el máximo cuidado, como si fuera de nuestra familia.",
                photo: con2 
            },
            {
                name: "Calidez",
                details: "Nos esforzamos para que cada cliente se sienta cómodo y bienvenido, disfrutando de un ambiente acogedor desde que sube al vehículo.",
                photo: con5 // Usar la variable de foto o ícono que tenías
            },
            {
                name: "Eficiencia",
                details: "Empleamos la mejor logística para que tus traslados sean rápidos y puntuales, asegurando que llegues a tu destino sin demoras innecesarias.",
                photo: con4 
            },
        ]
    }
};