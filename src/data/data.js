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
        whatsappClaro:    "593989131819",
        mapUrl: "https://maps.app.goo.gl/TZ7Rt8dwuBns4icp8",
        address: "Av. Manuel Córdova Galarza, Pomasqui, Quito.",
    },
    
    // --- Identidad Corporativa  ---
    identity: {
        mision: "Ofrecer el servicio de transporte más seguro, rápido y confiable en el todo pomasqui, basado en la calidad, la capacitación continua de nuestros socios y un compromiso total con la satisfacción del cliente.",
        vision: "Ser la cooperativa de taxis de mayor confianza en todo el sector de Pomasqui, reconocida por nuestra rápida respuesta, la seguridad y el fuerte compromiso social con nuestra comunidad de usuarios",
        objetivos: [
            "Garantizar la disponibilidad del servicio 24/7, incluso en feriados.",
            "Expandir la cobertura de nuestros servicios.",
            "Alcanzar una calificación de 4.8/5 estrellas en satisfacción del cliente."
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
                name: "Control de Calidad",
                details: "Certificamos la higiene y el estado mecánico de cada taxi semanalmente, asegurando un viaje cómodo y sin fallas.",
                photo: con1
            },
            {
                name: "Sistema Sugerencias",
                details: "Cada sugerencia es revisada por la Cooperativa para mejorar el servicio.",
                photo: con2 
            },
            {
                name: "Tarifas Transparentes",
                details: "Garantizamos el uso del taxímetro en rutas fijas, precios sin cargos ocultos ni sorpresas.",
                photo: con5 
            },
            {
                name: "Objetos Perdidos",
                details: "Recupera objetos olvidados en la oficina central de Pomasqui.",
                photo: con4 
            },
        ]
    }
};