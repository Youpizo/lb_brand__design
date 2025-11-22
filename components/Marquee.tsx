import React from 'react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  className?: string;
  variant?: 'solid' | 'outline';
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  items, 
  direction = 'left', 
  className = '',
  variant = 'solid'
}) => {
  const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';
  
  return (
    <div className={`relative flex overflow-hidden py-4 ${className}`}>
      <div className={`flex whitespace-nowrap ${animationClass}`}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className={`text-4xl md:text-6xl font-black uppercase tracking-tighter ${
                  variant === 'outline' 
                    ? 'text-transparent stroke-text stroke-lb-blue' 
                    : 'text-lb-blue'
                }`}
                style={variant === 'outline' ? { WebkitTextStroke: '1px currentColor' } : {}}
                >
                  {item}
                </span>
                <span className="text-lb-pink text-3xl">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};