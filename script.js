// Attendre que GSAP soit chargé et que le DOM soit prêt
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier que GSAP est disponible
    if (typeof gsap === 'undefined') {
        console.error('GSAP n\'est pas chargé');
        return;
    }

    // Animation typographique pour "Coming soon"
    const titleWords = document.querySelectorAll('.coming-soon-title .word');
    
    if (titleWords.length > 0) {
        // Animation lettre par lettre pour un effet "typing" élégant
        titleWords.forEach((word, wordIndex) => {
            const letters = word.textContent.split('');
            word.textContent = '';
            word.style.opacity = '1';
            
            letters.forEach((letter, letterIndex) => {
                const span = document.createElement('span');
                span.textContent = letter === ' ' ? '\u00A0' : letter;
                span.style.display = 'inline-block';
                span.style.opacity = '0';
                span.style.transform = 'translateY(30px) rotateX(90deg)';
                word.appendChild(span);
                
                gsap.to(span, {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    delay: 0.3 + (wordIndex * 0.3) + (letterIndex * 0.03)
                });
            });
        });
    }

    // Animation d'entrée pour la description
    const description = document.querySelector('.description');
    if (description) {
        gsap.to(description, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: 1.2
        });
    }

    // Les boutons sont visibles par défaut, pas d'animation
});

// Gestion du Dark Mode
(function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    // Fonction pour obtenir le thème préféré
    function getPreferredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored) {
            return stored;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Fonction pour appliquer le thème
    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    
    // Initialiser le thème au chargement
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
    
    // Écouter les changements de préférence système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
    
    // Gérer le clic sur le bouton toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
})();

