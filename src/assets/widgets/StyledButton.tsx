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
    <div className={`styled-button-wrapper ${variant}`}>
      <button
        className={`styled-button ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default StyledButton;
