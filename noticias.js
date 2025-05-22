// Datos de ejemplo para noticias
const noticias = [
    {
        id: 1,
        titulo: "Tos ferina",
        fecha: "22 de mayo, 2023",
        resumen: "Infección del tracto respiratorio muy contagiosa que se puede prevenir fácilmente con una vacuna.",
        imagen: "tosferina.jpeg",
        contenido: "Texto completo de la noticia..."
    },
    
    
];

// Función para cargar las noticias
function cargarNoticias() {
    const container = document.getElementById('noticias-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    noticias.forEach(noticia => {
        const noticiaElement = document.createElement('div');
        noticiaElement.className = 'noticia-card';
        
        noticiaElement.innerHTML = `
            <div class="noticia-image">
                <img src="${noticia.imagen || 'img/placeholder.jpg'}" alt="${noticia.titulo}">
            </div>
            <div class="noticia-content">
                <h3 class="noticia-title">${noticia.titulo}</h3>
                <p class="noticia-date">${noticia.fecha}</p>
                <p class="noticia-summary">${noticia.resumen}</p>
                <div class="noticia-footer">
                    <a href="https://www.youtube.com/@ConsultorioMedicoFamiliarA-s3c/suscribed=${noticia.id}" class="button outline" target="_blank"  >Leer más</a> 
                    <button class="button outline" onclick="compartirNoticia(${noticia.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(noticiaElement);
    });
}

// Función para compartir una noticia
function compartirNoticia(id) {
    const noticia = noticias.find(n => n.id === id);
    if (!noticia) return;
    
    if (navigator.share) {
        navigator.share({
            title: noticia.titulo,
            text: noticia.resumen,
            url: `https://www.facebook.com/ConsultoriomedicofamiliarAdulan`
        }).catch(error => {
            console.log('Error al compartir:', error);
        });
    } else {
        alert('La funcionalidad de compartir no está disponible en este navegador.');
    }
}

// Cargar noticias cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarNoticias);