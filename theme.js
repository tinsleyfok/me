// Theme Toggle (Dark/Light Mode)
(function() {
    const toggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.classList.add('dark-mode');
    }
    
    // Toggle theme on click
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save preference
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Update pixel colors for dark mode
        updatePixelColors(isDark);
    });
    
    // Update pixel colors based on theme
    function updatePixelColors(isDark) {
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach(pixel => {
            const currentColor = pixel.style.backgroundColor;
            // Slightly adjust brightness for dark mode
            if (isDark) {
                pixel.style.filter = 'brightness(0.8)';
            } else {
                pixel.style.filter = 'brightness(1)';
            }
        });
    }
    
    // Initial pixel update
    if (body.classList.contains('dark-mode')) {
        setTimeout(() => updatePixelColors(true), 100);
    }
})();

