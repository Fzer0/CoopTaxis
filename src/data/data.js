import con1 from '../assets/imagen/con1.jpeg';
import con2 from '../assets/imagen/con2.jpeg';
import con4 from '../assets/imagen/con4.jpeg';
import con5 from '../assets/imagen/con5.jpeg';
import photoEquipo from '../assets/imagen/equipo.jpeg';

// Datos de la cooperativa de taxis
export const cooperativaData = {
    name: "Cooperativa en Taxis Manuel Córdova Galarza",
    slogan: "En nuestros servicios 24/7 con un buen parque automotor, conductores profesionales, a tu servicio.",
    mainPageLink: "/", 
    
    // Información de Contacto
    contact: {
        phoneFijo: "(02) 2352 880 / 2353 561",
        whatsappMovistar: "593983950288",
        whatsappClaro: "593989131819",
        mapUrl: "https://maps.app.goo.gl/TZ7Rt8dwuBns4icp8",
        address: "Av. Manuel Córdova Galarza, Pomasqui, Quito.",
    },
    
    // Identidad Corporativa
    identity: {
        mision: "Proporcionar un servicio de transporte excepcional, centrado en la seguridad total, la fiabilidad operativa y la comodidad superior de nuestros usuarios, fomentando una relación de confianza duradera.",
        
        vision: "Convertimos en la cooperativa en taxis de referencia y liderazgo, buscamos ser la primera elección y más valorada tanto por nuestros clientes y público en general",
        
        objetivos: [
            "Asegurar la total disponibilidad de nuestra flota (24 horas al día, 7 días a la semana) para atender todas las solicitudes, incluyendo días festivos y eventos especiales.",
            "Implementar soluciones tecnológicas para expandir y optimizar la cobertura de nuestros servicios, Dentro y fuera de la ciudad.",
            "Mantener un índice de satisfacción del cliente, medido a través de encuestas post-servicio y métricas de calidad.",
            "Garantizar que el 100% de nuestros socios conductores aprueben los módulos de capacitación anual en seguridad vial y atención al cliente."
        ],
    },
    
    // Esquema de Colores
    colors: {
        primary: '#FFC805',
        secondary: '#EDB900',
        backgroundDark: '#0F0F0F',
        backgroundLight: '#F7F7F7',
        greyMedium: '#6D6D6D',
    },

    // Redes Sociales
    socialMedia: {
        facebook: "https://www.facebook.com/photo/?fbid=156548693678036&set=p.156548693678036",
        instagram: "https://instagram.com/taxis_cordova_oficial",
        twitter: "https://x.com/PopBase",
    },
    
    // Fotos del Equipo
    photos: [
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
                photo: con1
            },
            {
                name: "Seguridad",
                details: "Garantizamos viajes protegidos, asegurando que cada cliente sea tratado con el máximo cuidado, como si fuera de nuestra familia.",
                photo: con2 
            },
            {
                name: "Calidez",
                details: "Nos esforzamos para que cada cliente se sienta cómodo y bienvenido, disfrutando de un ambiente acogedor desde que sube al vehículo.",
                photo: con5
            },
            {
                name: "Eficiencia",
                details: "Empleamos la mejor logística para que tus traslados sean rápidos y puntuales, asegurando que llegues a tu destino sin demoras innecesarias.",
                photo: con4 
            },
        ]
    }
};