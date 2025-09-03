import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-irs-blue-500 hover:bg-irs-blue-600 text-white border-irs-blue-500 hover:border-irs-blue-600',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white border-gray-600 hover:border-gray-700',
  outline: 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-gray-400',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border-transparent'
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base'
};

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'outline', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center border-2 rounded-lg font-medium transition-all duration-200 ease-in-out hover:shadow-md hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  return (
    <button
      className={`${baseClasses} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
