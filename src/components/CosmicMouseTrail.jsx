import { useState, useEffect, useRef } from 'react';

const CosmicMouseTrail = () => {
  const [positions, setPositions] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const requestRef = useRef();
  const lastMoveTime = useRef(0);
  const pointCount = 20;

  const colorStops = [
    { r: 48, g: 25, b: 52 },
    { r: 75, g: 0, b: 130 },
    { r: 138, g: 43, b: 226 },
    { r: 186, g: 85, b: 211 },
    { r: 221, g: 160, b: 221 },
  ];

  const getColor = (progress) => {
    const stopIndex = Math.min(
      colorStops.length - 2,
      Math.floor(progress * (colorStops.length - 1))
    );
    const stopProgress = progress * (colorStops.length - 1) - stopIndex;
    
    const r = Math.floor(
      colorStops[stopIndex].r + 
      (colorStops[stopIndex + 1].r - colorStops[stopIndex].r) * stopProgress
    );
    const g = Math.floor(
      colorStops[stopIndex].g + 
      (colorStops[stopIndex + 1].g - colorStops[stopIndex].g) * stopProgress
    );
    const b = Math.floor(
      colorStops[stopIndex].b + 
      (colorStops[stopIndex + 1].b - colorStops[stopIndex].b) * stopProgress
    );
    
    return { r, g, b };
  };

  useEffect(() => {
    const handleMove = (x, y) => {
      const now = Date.now();
      setIsMoving(true);
      lastMoveTime.current = now;
      
      setPositions(prev => {
        const newPositions = [...prev, { x, y, time: now }];
        return newPositions.slice(-pointCount);
      });

      setTimeout(() => {
        if (Date.now() - lastMoveTime.current > 100) {
          setIsMoving(false);
        }
      }, 100);
    };

    const handleMouseMove = (e) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
      }
    };

    const animate = () => {
      if (!isMoving) {
        setPositions(prev => {
          if (prev.length === 0) return prev;
          const cutoff = Date.now() - 300;
          return prev.filter(pos => pos.time > cutoff);
        });
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isMoving]);

  // Detect mobile
  const isMobile = window.innerWidth < 768;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {positions.map((pos, index) => {
        const progress = index / positions.length;
        const { r, g, b } = getColor(progress);
        const opacity = 0.6 + (0.4 * progress);
        const size = isMobile 
          ? 4 + (8 * (1 - progress))    // smaller on mobile
          : 6 + (12 * (1 - progress));  // normal on desktop
        const blur = isMobile
          ? 0.5 + (2 * (1 - progress))  // less blur on mobile
          : 1 + (4 * (1 - progress));   // normal on desktop

        return (
          <div
            key={`${pos.x}-${pos.y}-${index}-${pos.time}`}
            className="absolute rounded-full transition-all duration-75"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: `rgba(${r}, ${g}, ${b}, ${opacity})`,
              filter: `blur(${blur}px)`,
              zIndex: pointCount - index,
            }}
          />
        );
      })}
    </div>
  );
};

export default CosmicMouseTrail;
