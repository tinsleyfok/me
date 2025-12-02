// Gradient center with pixel edges
(function() {
    const pixelBg = document.createElement('div');
    pixelBg.className = 'pixel-bg';
    document.body.insertBefore(pixelBg, document.body.firstChild);
    
    // Create gradient circle in center
    const gradientCircle = document.createElement('div');
    gradientCircle.className = 'gradient-circle';
    pixelBg.appendChild(gradientCircle);
    
    // Create pixel grid for edges
    const pixelGrid = document.createElement('div');
    pixelGrid.className = 'pixel-grid';
    pixelBg.appendChild(pixelGrid);
    
    // Responsive pixel size
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    const pixelSize = isMobile ? 20 : (isTablet ? 24 : 28);
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cols = Math.ceil(width / pixelSize);
    const rows = Math.ceil(height / pixelSize);
    
    const centerX = width / 2;
    const centerY = height / 2;
    const gradientRadius = Math.min(width, height) * 0.65;
    
    // Color for position - pick from palette, no grey blending
    function getColorForPosition(col, row) {
        const xRatio = col / cols;
        const yRatio = row / rows;
        
        // More vibrant saturated colors
        const palette = [
            { r: 255, g: 210, b: 50 },    // bright yellow
            { r: 255, g: 170, b: 30 },    // golden orange
            { r: 255, g: 120, b: 50 },    // orange
            { r: 255, g: 80, b: 80 },     // red
            { r: 255, g: 70, b: 130 },    // hot pink
            { r: 255, g: 100, b: 180 },   // pink
            { r: 255, g: 120, b: 220 },   // magenta pink
            { r: 220, g: 100, b: 255 },   // purple
            { r: 170, g: 100, b: 255 },   // violet
            { r: 100, g: 150, b: 255 },   // blue
            { r: 50, g: 200, b: 255 },    // sky blue
            { r: 30, g: 220, b: 180 },    // teal
            { r: 50, g: 200, b: 100 },    // green
            { r: 150, g: 220, b: 50 },    // lime
        ];
        
        // Map position to palette index (circular, no grey zones)
        const angle = Math.atan2(yRatio - 0.5, xRatio - 0.5);
        const normalizedAngle = (angle + Math.PI) / (2 * Math.PI); // 0 to 1
        const index = Math.floor(normalizedAngle * palette.length);
        
        const color = palette[index % palette.length];
        
        // Small variation, keep it bright
        const variation = (Math.random() - 0.5) * 15;
        const r = Math.min(255, Math.max(130, Math.round(color.r + variation)));
        const g = Math.min(255, Math.max(100, Math.round(color.g + variation)));
        const b = Math.min(255, Math.max(100, Math.round(color.b + variation)));
        
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    const pixels = [];
    
    // Add a few pixels inside the center (less than 15)
    const centerPixelCount = Math.floor(Math.random() * 8) + 5; // 5-12 pixels
    for (let i = 0; i < centerPixelCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * gradientRadius * 0.7;
        const x = centerX + Math.cos(angle) * distance - pixelSize / 2;
        const y = centerY + Math.sin(angle) * distance - pixelSize / 2;
        
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.left = x + 'px';
        pixel.style.top = y + 'px';
        pixel.style.width = pixelSize + 'px';
        pixel.style.height = pixelSize + 'px';
        pixel.style.backgroundColor = getColorForPosition(
            Math.floor(x / pixelSize), 
            Math.floor(y / pixelSize)
        );
        pixel.style.opacity = '0.7';
        
        pixelGrid.appendChild(pixel);
        
        pixels.push({
            element: pixel,
            centerX: x + pixelSize / 2,
            centerY: y + pixelSize / 2,
            offsetX: 0,
            offsetY: 0
        });
    }
    
    // Create pixels on edges (outside gradient circle)
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * pixelSize;
            const y = row * pixelSize;
            const pixelCenterX = x + pixelSize / 2;
            const pixelCenterY = y + pixelSize / 2;
            
            // Distance from center
            const distFromCenter = Math.sqrt(
                Math.pow(pixelCenterX - centerX, 2) + 
                Math.pow(pixelCenterY - centerY, 2)
            );
            
            // Only show pixels outside gradient circle (push further out)
            const fadeStart = gradientRadius * 0.85;
            const fadeEnd = gradientRadius * 1.2;
            
            if (distFromCenter < fadeStart) continue; // Inside gradient, skip
            
            // More pixels on sides
            let showChance = 0.8;
            if (distFromCenter < fadeEnd) {
                showChance = (distFromCenter - fadeStart) / (fadeEnd - fadeStart) * 0.7;
            }
            
            // Less white spaces
            const edgeFactor = Math.min(distFromCenter / (Math.max(width, height) * 0.5), 1);
            const whiteChance = edgeFactor * 0.25;
            
            if (Math.random() > showChance || Math.random() < whiteChance) continue;
            
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            
            pixel.style.left = x + 'px';
            pixel.style.top = y + 'px';
            pixel.style.width = pixelSize + 'px';
            pixel.style.height = pixelSize + 'px';
            pixel.style.backgroundColor = getColorForPosition(col, row);
            
            pixelGrid.appendChild(pixel);
            
            pixels.push({
                element: pixel,
                centerX: pixelCenterX,
                centerY: pixelCenterY,
                offsetX: 0,
                offsetY: 0
            });
        }
    }
    
    let mouseX = -1000;
    let mouseY = -1000;
    let gradientOffsetX = 0;
    let gradientOffsetY = 0;
    let gradientScale = 1;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        // Gradient circle interaction
        const dxCenter = mouseX - centerX;
        const dyCenter = mouseY - centerY;
        const distToCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
        
        // Gradient follows cursor slightly and scales
        const gradientMaxDist = gradientRadius * 1.5;
        if (distToCenter < gradientMaxDist) {
            const influence = (1 - distToCenter / gradientMaxDist) * 0.15;
            gradientOffsetX += (dxCenter * influence - gradientOffsetX) * 0.05;
            gradientOffsetY += (dyCenter * influence - gradientOffsetY) * 0.05;
            gradientScale += ((1 + influence * 0.3) - gradientScale) * 0.05;
        } else {
            gradientOffsetX *= 0.95;
            gradientOffsetY *= 0.95;
            gradientScale += (1 - gradientScale) * 0.05;
        }
        
        gradientCircle.style.transform = `translate(calc(-50% + ${gradientOffsetX}px), calc(-50% + ${gradientOffsetY}px)) scale(${gradientScale})`;
        
        // Pixel interaction
        pixels.forEach(p => {
            const dx = mouseX - p.centerX;
            const dy = mouseY - p.centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Distance from pixel to gradient center
            const dxToGradient = centerX - p.centerX;
            const dyToGradient = centerY - p.centerY;
            
            const maxDistance = 150;
            const maxMove = 35;
            
            if (distance < maxDistance) {
                const force = (1 - distance / maxDistance) * maxMove;
                const angle = Math.atan2(dy, dx);
                p.offsetX = -Math.cos(angle) * force;
                p.offsetY = -Math.sin(angle) * force;
            } else if (distToCenter < gradientRadius * 0.8) {
                // When cursor is in center, pixels are attracted toward gradient
                const attractForce = (1 - distToCenter / (gradientRadius * 0.8)) * 8;
                const attractAngle = Math.atan2(dyToGradient, dxToGradient);
                p.offsetX += (Math.cos(attractAngle) * attractForce - p.offsetX) * 0.03;
                p.offsetY += (Math.sin(attractAngle) * attractForce - p.offsetY) * 0.03;
            } else {
                p.offsetX *= 0.9;
                p.offsetY *= 0.9;
            }
            
            p.element.style.transform = `translate(${p.offsetX}px, ${p.offsetY}px)`;
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => location.reload());
})();
