import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content',
  delay = 0,
  direction = 'up',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-20';
      case 'down': return '-translate-y-20';
      case 'left': return '-translate-x-20';
      case 'right': return 'translate-x-20';
      default: return 'translate-y-20';
    }
  };

  return (
    <div ref={ref} style={{ width }} className={`relative ${className}`}>
      <div
        style={{ 
            transitionDelay: `${delay}ms`,
            transform: isVisible ? 'translate(0, 0)' : undefined
        }}
        className={`transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100' : `opacity-0 ${getTransform()}`
        }`}
      >
        {children}
      </div>
    </div>
  );
};