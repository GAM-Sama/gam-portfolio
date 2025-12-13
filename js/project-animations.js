// Project Page Animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize typing effect for project subtitles
    initProjectTypingEffect();
    
    // Setup scroll reveal for project sections
    setupProjectScrollReveal();
    
    // Initial check in case elements are already in viewport
    checkProjectScrollAnimation();
});

// Typing effect for project subtitles
function initProjectTypingEffect() {
    const projectSubtitles = document.querySelectorAll('.project-subtitle');
    
    projectSubtitles.forEach(subtitle => {
        // Store the original text
        const originalText = subtitle.textContent.trim();
        
        // Clear the content and add typing class
        subtitle.textContent = '';
        subtitle.classList.add('typing');
        
        let index = 0;
        const typeSpeed = 50; // Milliseconds between characters
        
        function type() {
            if (index < originalText.length) {
                // Add the next character
                subtitle.textContent += originalText.charAt(index);
                index++;
                
                // Continue typing
                setTimeout(type, typeSpeed);
            } else {
                // Typing complete, remove the cursor
                subtitle.classList.remove('typing');
            }
        }
        
        // Start typing after a short delay
        setTimeout(type, 300);
    });
}

// Scroll reveal for project sections
function setupProjectScrollReveal() {
    // Add reveal class to all project sections
    const projectSections = document.querySelectorAll('.project-section, .project-feature, .tech-grid, .gallery-item, .project-gallery');
    projectSections.forEach(section => {
        section.classList.add('reveal');
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', checkProjectScrollAnimation);
    
    // Initial check
    checkProjectScrollAnimation();
}

// Check if elements are in viewport and animate them
function checkProjectScrollAnimation() {
    const revealElements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 50;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}
