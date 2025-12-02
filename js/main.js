// Portfolio JavaScript - Versión Final Definitiva
// Solución: Lógica de animación global y recálculo tras carga de datos

document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de funcionalidades
    initNavigation();
    initProjectFilter();
    initContactForm();
    initTypingEffect();
    initSmoothScroll();
    initMobileMenu();
    initScrollIndicator();
    initFloatingButtons();
    
    // Configurar animaciones y cargar contenido
    setupScrollReveal(); // Configura el listener del scroll
    loadAboutContent();  // Carga el JSON
});

// Control de botones flotantes (Corregido)
function initFloatingButtons() {
    const floatingButtons = document.querySelector('.floating-buttons');
    // Buscamos específicamente la sección 'Sobre mí' para no taparla
    const aboutSection = document.getElementById('about'); 
    
    // Si no existen los elementos, no hacemos nada para evitar errores
    if (!floatingButtons || !aboutSection) return;

    function updateFloatingButtons() {
        // Calculamos dónde termina visualmente la sección 'Sobre mí'
        const aboutSectionBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
        
        // Solo mostramos los botones SI hemos bajado más allá de la sección 'Sobre mí'
        // (Le damos un margen de -100px para que aparezcan suavemente justo al final)
        if (window.scrollY > (aboutSectionBottom - 100)) {
            floatingButtons.classList.add('visible');
            document.body.classList.add('floating-buttons-visible');
        } else {
            floatingButtons.classList.remove('visible');
            document.body.classList.remove('floating-buttons-visible');
        }
    }

    // Actualizar al hacer scroll
    window.addEventListener('scroll', updateFloatingButtons, { passive: true });
    
    // Comprobación inicial
    updateFloatingButtons();
}

// --- LÓGICA DE ANIMACIÓN (GLOBAL) ---

// Esta función ahora es independiente para poder llamarla cuando queramos
function checkScrollAnimation() {
    // Seleccionamos todo lo que tenga clase 'reveal'
    const revealElements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 50; // Umbral bajo para que aparezcan fácil

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        // Si el elemento entra en pantalla, le ponemos la clase active
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
            element.style.opacity = '1';       // Fuerza visual
            element.style.transform = 'translateY(0)'; // Fuerza posición
        }
    });
}

function setupScrollReveal() {
    // Agregar clase reveal a los elementos que queremos animar al inicio
    const elementsToReveal = document.querySelectorAll(
        '.about-content, .project-card, .skill-category, .contact-content'
    );
    
    elementsToReveal.forEach(el => el.classList.add('reveal'));

    // Escuchar el scroll para animar
    window.addEventListener('scroll', checkScrollAnimation);
    
    // Ejecutar una vez al inicio
    checkScrollAnimation();
}


// --- CARGA DE CONTENIDO ---

async function loadAboutContent() {
    const aboutText = document.querySelector('.about-text');
    if (!aboutText) return;
    
    try {
        const timestamp = new Date().getTime();
        const response = await fetch(`content/about.json?v=${timestamp}`);
        
        if (!response.ok) throw new Error('Error de conexión');
        
        const aboutData = await response.json();
        renderAboutContent(aboutData);

    } catch (error) {
        console.error('Error:', error);
        aboutText.innerHTML = `<p>Error cargando contenido. Recarga la página.</p>`;
        aboutText.style.opacity = '1';
    }
}

function renderAboutContent(data) {
    const aboutText = document.querySelector('.about-text');
    if (!aboutText || !data) return;

    // 1. Generar HTML
    let htmlContent = `
        <h3>Especialista en Automatización y Desarrollo</h3>
        <p>${data.shortVersion || ''}</p>
    `;

    if (data.professionalVersion && Array.isArray(data.professionalVersion)) {
        htmlContent += `
            <button id="showFullAbout" class="btn btn-secondary" style="margin: 1rem 0;">
                Leer más sobre mí
            </button>
            <div id="fullAboutContent" style="display: none; margin-top: 1.5rem;">
                ${renderProfessionalVersion(data.professionalVersion)}
            </div>
        `;
    }

    // 2. Inyectar HTML
    aboutText.innerHTML = htmlContent;

    // 3. CORRECCIÓN CRÍTICA DE VISIBILIDAD
    // Desbloqueamos el contenedor padre inmediato
    const parentContainer = aboutText.closest('.about-content');
    if (parentContainer) {
        parentContainer.classList.add('active');
        parentContainer.style.opacity = '1';
        parentContainer.style.transform = 'none';
    }
    aboutText.style.opacity = '1';

    // 4. Lógica del botón "Leer más"
    const btnLeerMas = document.getElementById('showFullAbout');
    if (btnLeerMas) {
        btnLeerMas.addEventListener('click', function() {
            const fullContent = document.getElementById('fullAboutContent');
            const isHidden = fullContent.style.display === 'none';
            
            fullContent.style.display = isHidden ? 'block' : 'none';
            this.textContent = isHidden ? 'Mostrar menos' : 'Leer más sobre mí';
            
            if (isHidden) {
                fullContent.style.opacity = 0;
                setTimeout(() => {
                    fullContent.style.transition = 'opacity 0.5s';
                    fullContent.style.opacity = 1;
                    // Al abrir el texto, recalculamos animaciones de nuevo
                    checkScrollAnimation();
                }, 50);
            }
        });
    }

    // 5. SOLUCIÓN FINAL A TU PROBLEMA
    // Forzamos la comprobación de animaciones tras inyectar el HTML nuevo.
    // Esto hace que el código se de cuenta de dónde están ahora los Proyectos.
    setTimeout(() => {
        checkScrollAnimation(); 
    }, 100);
}

function renderProfessionalVersion(professionalVersion) {
    if (!Array.isArray(professionalVersion)) return '';
    return professionalVersion.map(section => {
        if (typeof section === 'string') return `<p>${section}</p>`;
        if (section && typeof section === 'object' && Array.isArray(section.items)) {
            return `<ul style="margin: 0.5rem 0 1rem 1.5rem; list-style-type: disc;">
                ${section.items.map(item => `<li>${item}</li>`).join('')}
            </ul>`;
        }
        return '';
    }).join('');
}


// --- RESTO DE FUNCIONALIDADES ---

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.hero-scroll');
    if (!scrollIndicator) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            closeMobileMenu();
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 15, 0.95)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(10, 10, 15, 0.8)';
            header.style.backdropFilter = 'blur(10px)';
        }
        updateActiveSection();
    });
}

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollY = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) link.classList.add('active');
            });
        }
    });
}

function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
            // Recalcular posiciones tras filtrar
            setTimeout(checkScrollAnimation, 350);
        });
    });
}

function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

function closeMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const text = typingText.textContent;
    typingText.textContent = '';
    typingText.style.borderRight = '2px solid #8b5cf6';
    
    let index = 0;
    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => typingText.style.borderRight = 'none', 1000);
        }
    }
    setTimeout(type, 500);
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
}

function initContactForm() {
    const form = document.querySelector('.form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simulación básica
        const btn = form.querySelector('button');
        const oldText = btn.textContent;
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        setTimeout(() => {
            alert('Mensaje enviado (Simulación)');
            form.reset();
            btn.textContent = oldText;
            btn.disabled = false;
        }, 1500);
    });
}

// Preloader y Parallax
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero && window.scrollY < window.innerHeight) {
        hero.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
    }
});

console.log('%c🚀 Portfolio de Gonzalo A.M.', 'color: #8b5cf6; font-size: 16px;');