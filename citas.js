// Función para manejar la solicitud de cita por WhatsApp
function setupCitaWhatsApp() {
    const agendarCitaBtn = document.getElementById('agendar-cita');
    const especialidadSelect = document.getElementById('especialidad');
    
    if (agendarCitaBtn && especialidadSelect) {
        agendarCitaBtn.addEventListener('click', function() {
            // Número de WhatsApp del consultorio (ejemplo)
            const numeroWhatsApp = "+593967053999";
            
            // Mensaje base
            let mensaje = "Hola, quiero agendar una cita médica en el Consultorio Médico Familiar Adulam.";
            
            // Añadir especialidad si se seleccionó
            const especialidad = especialidadSelect.value;
            if (especialidad) {
                const especialidadTexto = especialidadSelect.options[especialidadSelect.selectedIndex].text;
                mensaje += ` Especialidad: ${especialidadTexto}.`;
            }
            
            // Crear enlace de WhatsApp con mensaje predefinido
            const whatsappLink = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            
            // Abrir WhatsApp
            window.open(whatsappLink, '_blank');
        });
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', setupCitaWhatsApp);