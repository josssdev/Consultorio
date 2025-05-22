// Datos de ejemplo para categorías y productos
const categorias = [
    { id: "medicamentos", nombre: "Medicamentos" },
    { id: "cuidado-personal", nombre: "Cuidado Personal" },
    { id: "suplementos", nombre: "Suplementos" },
    { id: "primeros-auxilios", nombre: "Primeros Auxilios" }
];

const productos = [
    {
        id: 1,
        nombre: "Paracetamol 500mg",
        precio: 85,
        descripcion: "Analgésico y antipirético. Caja con 20 tabletas.",
        imagen: "img/placeholder.jpg",
        categoria: "medicamentos"
    },
    {
        id: 2,
        nombre: "Ibuprofeno 400mg",
        precio: 95,
        descripcion: "Antiinflamatorio no esteroideo. Caja con 30 tabletas.",
        imagen: "img/productos/ibuprofeno.jpg",
        categoria: "medicamentos"
    },
    {
        id: 3,
        nombre: "Loratadina 10mg",
        precio: 120,
        descripcion: "Antihistamínico. Caja con 10 tabletas.",
        imagen: "img/productos/loratadina.jpg",
        categoria: "medicamentos"
    },
    {
        id: 4,
        nombre: "Jabón Antibacterial",
        precio: 45,
        descripcion: "Jabón líquido antibacterial para manos. 250ml.",
        imagen: "img/productos/jabon.jpg",
        categoria: "cuidado-personal"
    },
    {
        id: 5,
        nombre: "Crema Hidratante",
        precio: 75,
        descripcion: "Crema hidratante para piel seca. 200ml.",
        imagen: "img/productos/crema.jpg",
        categoria: "cuidado-personal"
    },
    {
        id: 6,
        nombre: "Protector Solar FPS 50",
        precio: 180,
        descripcion: "Protector solar de amplio espectro. 120ml.",
        imagen: "img/productos/protector.jpg",
        categoria: "cuidado-personal"
    },
    {
        id: 7,
        nombre: "Vitamina C",
        precio: 150,
        descripcion: "Suplemento de Vitamina C. Frasco con 60 tabletas.",
        imagen: "img/productos/vitaminac.jpg",
        categoria: "suplementos"
    },
    {
        id: 8,
        nombre: "Complejo B",
        precio: 130,
        descripcion: "Suplemento de Complejo B. Frasco con 30 tabletas.",
        imagen: "img/productos/complejob.jpg",
        categoria: "suplementos"
    },
    {
        id: 9,
        nombre: "Kit de Primeros Auxilios",
        precio: 350,
        descripcion: "Kit básico de primeros auxilios para el hogar.",
        imagen: "img/productos/kit.jpg",
        categoria: "primeros-auxilios"
    },
    {
        id: 10,
        nombre: "Vendas Elásticas",
        precio: 65,
        descripcion: "Paquete de 2 vendas elásticas de 10cm x 5m.",
        imagen: "img/productos/vendas.jpg",
        categoria: "primeros-auxilios"
    }
];

// Función para cargar las pestañas de categorías
function cargarCategorias() {
    const tabsContainer = document.getElementById('categorias-tabs');
    if (!tabsContainer) {
        console.error('No se encontró el elemento con ID "categorias-tabs"');
        return;
    }
    
    tabsContainer.innerHTML = '';
    
    categorias.forEach((categoria, index) => {
        const tab = document.createElement('div');
        tab.className = `tab ${index === 0 ? 'active' : ''}`;
        tab.dataset.categoria = categoria.id;
        tab.textContent = categoria.nombre;
        
        tab.addEventListener('click', function() {
            // Desactivar todas las pestañas
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            // Activar esta pestaña
            this.classList.add('active');
            // Mostrar productos de esta categoría
            mostrarProductosPorCategoria(categoria.id);
        });
        
        tabsContainer.appendChild(tab);
    });
    
    // Mostrar productos de la primera categoría por defecto
    if (categorias.length > 0) {
        mostrarProductosPorCategoria(categorias[0].id);
    }
}

// Función para mostrar productos por categoría
function mostrarProductosPorCategoria(categoriaId) {
    const productosContainer = document.getElementById('productos-container');
    if (!productosContainer) {
        console.error('No se encontró el elemento con ID "productos-container"');
        return;
    }
    
    console.log('Mostrando productos para categoría:', categoriaId);
    
    // Filtrar productos por categoría
    const productosFiltrados = productos.filter(p => p.categoria === categoriaId);
    console.log('Productos filtrados:', productosFiltrados);
    
    // Limpiar contenedor
    productosContainer.innerHTML = '';
    
    // Crear grid de productos
    const productosGrid = document.createElement('div');
    productosGrid.className = 'productos-grid';
    
    // Añadir productos
    productosFiltrados.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card';
        
        productoCard.innerHTML = `
            <div class="producto-image">
                <img src="${producto.imagen || 'img/placeholder.jpg'}" alt="${producto.nombre}">
            </div>
            <div class="producto-content">
                <h3 class="producto-title">${producto.nombre}</h3>
                <p class="producto-description">${producto.descripcion}</p>
                <p class="producto-price">$${producto.precio.toFixed(2)}</p>
                <button class="button primary full-width whatsapp-button" onclick="comprarProducto(${producto.id})">
                    <span class="whatsapp-icon"></span>
                    Comprar por WhatsApp
                </button>
            </div>
        `;
        
        productosGrid.appendChild(productoCard);
    });
    
    // Si no hay productos en esta categoría
    if (productosFiltrados.length === 0) {
        productosGrid.innerHTML = '<p class="text-center">No hay productos disponibles en esta categoría.</p>';
    }
    
    // Añadir grid al contenedor
    productosContainer.appendChild(productosGrid);
}

// Función para comprar producto por WhatsApp
function comprarProducto(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;
    
    // Número de WhatsApp del consultorio (ejemplo)
    const numeroWhatsApp = "5215512345678";
    
    // Mensaje predefinido
    const mensaje = `Hola, quiero comprar el siguiente producto: ${producto.nombre}`;
    
    // Crear enlace de WhatsApp con mensaje predefinido
    const whatsappLink = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir WhatsApp
    window.open(whatsappLink, '_blank');
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando tienda...');
    cargarCategorias();
});