import { useState, useEffect, useRef } from 'react';

const ElegantPointerTrail = () => {
  const [particles, setParticles] = useState([]);
  const requestRef = useRef();
  const lastMoveTime = useRef(0);
  const pointCount = 15;
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  useEffect(() => {
    const addParticle = (x, y) => {
      const now = Date.now();
      lastMoveTime.current = now;

      setParticles(prev => {
        const newParticle = {
          x,
          y,
          time: now,
          id: now + Math.random()
        };
        const updated = [...prev, newParticle];
        return updated.slice(-pointCount);
      });
    };

    const handleMouseMove = (e) => {
      addParticle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        addParticle(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const animate = () => {
      const now = Date.now();
      if (now - lastMoveTime.current > 100) {
        setParticles(prev => prev.filter(p => now - p.time < 300));
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
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle, index) => {
        const progress = index / particles.length;
        const opacity = 0.3 + (0.4 * (1 - progress));
        const size = isMobile
          ? 3 + (6 * (1 - progress))
          : 4 + (8 * (1 - progress));
        const blur = isMobile ? 1 : 1.5;

        return (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: `rgba(98, 21, 154, ${opacity})`, // Purple
              boxShadow: `0 0 ${blur}px rgba(128, 0, 128, ${opacity * 0.7})`,
              zIndex: pointCount - index
            }}
          />
        );
      })}
    </div>
  );
};

export default ElegantPointerTrail;
