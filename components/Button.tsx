import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 ease-out transform group overflow-hidden rounded-full";
  
  const variants = {
    primary: "bg-lb-blue text-white hover:bg-lb-blue/90 hover:scale-105 shadow-lg shadow-lb-blue/30 border-2 border-transparent",
    yellow: "bg-lb-yellow text-lb-blue hover:bg-lb-yellow/90 hover:scale-105 shadow-lg shadow-lb-yellow/30 border-2 border-transparent",
    secondary: "bg-lb-pink text-white hover:bg-lb-pink/90 hover:scale-105 shadow-lg shadow-lb-pink/30 border-2 border-transparent",
    outline: "bg-transparent text-lb-blue border-2 border-lb-blue hover:bg-lb-blue hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
      {/* Hover Effect Background */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/20 transition-transform duration-300 ease-in-out" />
    </button>
  );
};