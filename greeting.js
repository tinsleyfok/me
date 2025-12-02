// Greeting Component with typing animation
(function() {
    const hour = new Date().getHours();
    let timeOfDay = "";
    
    if (hour < 12) {
        timeOfDay = "morning";
    } else if (hour < 18) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "evening";
    }
    
    const fullGreeting = "Good " + timeOfDay;
    const greetingElement = document.getElementById("greeting");
    const typingSpeed = 80;
    let index = 0;
    
    // Setup element with text and gradient overlay
    function setupElement(element, text) {
        // Clear element
        element.innerHTML = '';
        
        // Create text span
        const textSpan = document.createElement('span');
        textSpan.className = 'text-content';
        textSpan.textContent = text;
        
        // Create gradient overlay
        const overlay = document.createElement('span');
        overlay.className = 'gradient-overlay';
        overlay.textContent = text;
        overlay.setAttribute('aria-hidden', 'true');
        
        element.appendChild(textSpan);
        element.appendChild(overlay);
        
        return overlay;
    }
    
    // Typing animation for greeting
    function type() {
        if (index < fullGreeting.length) {
            const currentText = fullGreeting.slice(0, index + 1);
            setupElement(greetingElement, currentText);
            
            index++;
            const variance = Math.random() * 40 - 20;
            setTimeout(type, typingSpeed + variance);
        }
    }
    
    // Start typing after fade in
    setTimeout(type, 500);
    
    // TikTok setup
    const tiktokElement = document.getElementById("tiktok");
    setupElement(tiktokElement, "TikTok");
    
    // Tagline line 1 setup
    const tagline1 = document.querySelector(".tagline-line1");
    setupElement(tagline1, "Tinsley is designing");
    
    const cursorRadius = 80;
    
    // Update clip-path for gradient reveal
    function updateGradient(e, element) {
        const overlay = element.querySelector('.gradient-overlay');
        if (!overlay) return;
        
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if cursor is near the element
        const isNear = e.clientX >= rect.left - cursorRadius && 
                       e.clientX <= rect.right + cursorRadius &&
                       e.clientY >= rect.top - cursorRadius && 
                       e.clientY <= rect.bottom + cursorRadius;
        
        if (isNear) {
            overlay.style.clipPath = `circle(${cursorRadius}px at ${x}px ${y}px)`;
        } else {
            overlay.style.clipPath = 'circle(0px at 0px 0px)';
        }
    }
    
    document.addEventListener('mousemove', (e) => {
        updateGradient(e, greetingElement);
        updateGradient(e, tagline1);
        updateGradient(e, tiktokElement);
    });
})();
