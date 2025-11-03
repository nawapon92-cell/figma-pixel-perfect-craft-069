import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  ...props
}) => {
  const baseClasses = 'justify-center items-center flex overflow-hidden font-medium text-center tracking-[0.1px] leading-none rounded-[100px] transition-all duration-200 hover:opacity-90';
  
  const variantClasses = {
    primary: 'bg-white text-neutral-800',
    secondary: 'bg-transparent text-white border border-white',
    dark: 'bg-neutral-800 text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'pl-4 pr-6 py-2.5 text-base'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 justify-center">
        {icon && (
          <img
            src={icon}
            className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
            alt=""
          />
        )}
        <div className="self-stretch my-auto">{children}</div>
      </div>
    </button>
  );
};
