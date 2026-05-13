// Funcionalidad principal del Portafolio

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a, .hero-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Simple scroll animation for cards and sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.card, .ficha-academica, .stat-card, .resumen');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // 3. Cargar referencias desde referenciasData (cargado via js/referencias.js)
    cargarReferencias();
});

function cargarReferencias() {
    try {
        const lista = document.getElementById('referencias-list');
        if (lista && typeof referenciasData !== 'undefined') {
            referenciasData.forEach(referencia => {
                if (referencia.trim().length > 0) {
                    const li = document.createElement('li');
                    const textWithLinks = enlazarURLs(referencia);
                    li.innerHTML = textWithLinks;
                    lista.appendChild(li);
                }
            });
        } else if (lista) {
            lista.innerHTML = '<li>No se encontraron referencias.</li>';
        }
    } catch (error) {
        console.error('Error al cargar las referencias:', error);
    }
}

// Función auxiliar para convertir URLs en enlaces clickeables
function enlazarURLs(texto) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return texto.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: underline;">${url}</a>`;
    });
}
