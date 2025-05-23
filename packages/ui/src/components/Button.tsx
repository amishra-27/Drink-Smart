import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onPress 
}: ButtonProps) => {
  // This is a placeholder component that would be implemented differently
  // for web and mobile platforms
  return (
    <button 
      onClick={onPress}
      className={`
        button 
        button-${variant} 
        button-${size}
      `}
    >
      {children}
    </button>
  );
}; 