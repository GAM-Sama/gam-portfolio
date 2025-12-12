/**
 * Script para manejar la animación de scroll en las páginas de proyecto
 * Se encarga de activar las animaciones cuando los elementos son visibles en el viewport
 */

document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el navegador soporta Intersection Observer
    if ('IntersectionObserver' in window) {
        const sections = document.querySelectorAll('.project-section');
        
        // Configuración del observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Opcional: dejar de observar una vez que se ha mostrado
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observar cada sección
        sections.forEach(section => {
            observer.observe(section);
        });

        // Activar la primera sección de inmediato
        if (sections.length > 0) {
            sections[0].classList.add('active');
        }
    } else {
        // Fallback para navegadores que no soportan Intersection Observer
        console.log('Intersection Observer no soportado, mostrando todo el contenido');
        document.querySelectorAll('.project-section').forEach(section => {
            section.classList.add('active');
        });
    }
});
