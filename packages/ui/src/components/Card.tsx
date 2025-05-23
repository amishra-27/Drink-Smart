import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  variant?: 'default' | 'elevated';
}

export const Card = ({ 
  children, 
  title,
  variant = 'default' 
}: CardProps) => {
  // This is a placeholder component that would be implemented differently
  // for web and mobile platforms
  return (
    <div className={`card card-${variant}`}>
      {title && <div className="card-title">{title}</div>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}; 