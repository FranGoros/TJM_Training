// Numero de Toto
const WHATSAPP_NUMBER = "5492213147400";

// Comprueba que se haya agregado un número compuesto solamente por dígitos.
function numeroWhatsAppConfigurado() {
    return /^\d{10,15}$/.test(WHATSAPP_NUMBER);
}

// Construye el enlace de WhatsApp con el mensaje que recibe como parámetro.
function crearEnlaceWhatsApp(mensaje) {
    if (!numeroWhatsAppConfigurado()) {
        // Mientras falte el teléfono, los botones muestran una explicación en vez de abrir otro chat.
        return "#whatsapp-config";
    }

    // encodeURIComponent transforma espacios, tildes y signos en texto apto para una URL.
    const textoCodificado = encodeURIComponent(mensaje);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${textoCodificado}`;
}

// Mensaje para los botones generales de contacto.
const mensajeGeneral =
    "¡Hola! Estoy interesado/a en los entrenamientos personalizados en La Plata. ¿Me pasarías más información sobre los horarios y la disponibilidad?";

// Mensaje para quien toca el botón de clase individual.
const mensajePorClase =
    "Hola, estoy interesado/a en la clase de $6.000. ¿Hay disponibilidad en alguno de los horarios?";

// Mensaje para quien toca el botón del plan mensual.
const mensajePorMes =
    "Hola, estoy interesado/a en el plan mensual de $30.000. ¿Me contarías qué incluye y qué disponibilidad hay?";

// Conecta cada botón general con su mensaje.
document.querySelectorAll(".whatsapp-link").forEach((boton) => {
    boton.href = crearEnlaceWhatsApp(mensajeGeneral);
});

// Conecta el botón de clase con el mensaje que menciona los $6.000.
document.querySelectorAll(".whatsapp-class-link").forEach((boton) => {
    boton.href = crearEnlaceWhatsApp(mensajePorClase);
});

// Conecta el botón mensual con el mensaje que menciona los $30.000.
document.querySelectorAll(".whatsapp-month-link").forEach((boton) => {
    boton.href = crearEnlaceWhatsApp(mensajePorMes);
});

// Si el número todavía no está configurado, muestra una alerta al tocar un botón.
if (!numeroWhatsAppConfigurado()) {
    document.querySelectorAll(
        ".whatsapp-link, .whatsapp-class-link, .whatsapp-month-link"
    ).forEach((boton) => {
        boton.addEventListener("click", (evento) => {
            evento.preventDefault();
            alert("Falta configurar el WhatsApp. Abrí script.js y escribí el número real en la variable WHATSAPP_NUMBER.");
        });
    });
}

// Coloca el año actual automáticamente en el pie de página.
const elementoAnio = document.getElementById("current-year");
if (elementoAnio) {
    elementoAnio.textContent = new Date().getFullYear();
}
