import React, { useRef, useEffect, useCallback } from 'react';

const MetallicCosmicBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationFrameId = useRef(null);
  const timeRef = useRef(0);
  
  // Generate a starfield
  const initStars = useCallback((width, height, count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const scale = Math.random() * 2;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        scale: scale,
        alpha: 0.1 + Math.random() * 0.9,
        twinkle: Math.random() > 0.5 ? 0.5 + Math.random() * 0.5 : 0
      });
    }
    return stars;
  }, []);
  
  // Draw a grid with perspective
  const drawGrid = useCallback((ctx, width, height, time) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const size = Math.max(width, height) * 1.5;
    const spacing = 50;
    const maxLines = 30;
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(100, 149, 237, 0.15)';
    ctx.lineWidth = 0.5;
    
    // Perspective transformation
    const perspective = (x, y, z) => {
      const fov = 500;
      const scale = fov / (fov + z);
      return { x: centerX + (x - centerX) * scale, y: centerY + (y - centerY) * scale, scale };
    };
    
    // Draw grid
    for (let i = -maxLines; i <= maxLines; i++) {
      // Vertical lines (curved for 3D effect)
      ctx.beginPath();
      for (let j = -10; j <= 10; j += 0.5) {
        const z = j * spacing - (time * 0.1) % spacing;
        const y = i * spacing + Math.sin(time * 0.001 + i) * 10;
        const x1 = -size / 2;
        const x2 = size / 2;
        
        const p1 = perspective(x1, y, z);
        const p2 = perspective(x2, y, z);
        
        if (j === -10) {
          ctx.moveTo(p1.x, p1.y);
        } else {
          ctx.lineTo(p1.x, p1.y);
        }
      }
      ctx.stroke();
      
      // Horizontal lines (curved for 3D effect)
      ctx.beginPath();
      for (let j = -10; j <= 10; j += 0.5) {
        const z = j * spacing - (time * 0.1) % spacing;
        const x = i * spacing + Math.cos(time * 0.001 + i) * 10;
        const y1 = -size / 2;
        const y2 = size / 2;
        
        const p1 = perspective(x, y1, z);
        const p2 = perspective(x, y2, z);
        
        if (j === -10) {
          ctx.moveTo(p1.x, p1.y);
        } else {
          ctx.lineTo(p1.x, p1.y);
        }
      }
      ctx.stroke();
    }
    
    // Draw central glow
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.min(width, height) * 0.5);
    gradient.addColorStop(0, 'rgba(30, 58, 138, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }, []);
  
  // Draw stars
  const drawStars = useCallback((ctx, stars, width, height, time) => {
    stars.forEach(star => {
      // Update position
      star.x += star.vx;
      star.y += star.vy;
      
      // Wrap around edges
      if (star.x < 0) star.x = width;
      if (star.x > width) star.x = 0;
      if (star.y < 0) star.y = height;
      if (star.y > height) star.y = 0;
      
      // Twinkle effect
      let alpha = star.alpha;
      if (star.twinkle > 0) {
        alpha = star.alpha * (0.7 + 0.3 * Math.sin(time * 0.003 * star.twinkle));
      }
      
      // Draw star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      
      // Create radial gradient for star glow
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.radius * 2
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      gradient.addColorStop(1, 'rgba(100, 149, 237, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
    });
  }, []);
  
  // Animation loop
  const animate = useCallback((time) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    
    // Update time
    timeRef.current = time;
    
    // Draw elements
    drawGrid(ctx, width, height, time);
    drawStars(ctx, starsRef.current, width, height, time);
    
    // Continue animation
    animationFrameId.current = requestAnimationFrame(animate);
  }, [drawGrid, drawStars]);
  
  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Set canvas size
    canvas.width = width;
    canvas.height = height;
    
    // Reinitialize stars for new dimensions
    const starCount = Math.floor((width * height) / 1500);
    starsRef.current = initStars(width, height, starCount);
  }, [initStars]);
  
  // Initialize
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animationFrameId.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, handleResize]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-100"
      />
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 2px)',
          backgroundSize: '100% 2px',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 200px rgba(0, 0, 0, 0.9)',
        }}
      />
      <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.9) 100%)" />
    </div>
  );
};

export default MetallicCosmicBackground;
