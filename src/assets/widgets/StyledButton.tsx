import React, { ButtonHTMLAttributes } from 'react';
import './StyledButton.css';

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const StyledButton: React.FC<StyledButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`styled-button ${variant} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default StyledButton;