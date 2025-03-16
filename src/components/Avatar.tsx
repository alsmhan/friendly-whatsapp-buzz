
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | null;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  status = null,
  className 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <div className={cn('relative', className)}>
      <div 
        className={cn(
          'relative rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 transition-transform duration-200',
          sizeClasses[size]
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 dark:to-black/30" />
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to initials if image fails to load
            (e.target as HTMLImageElement).style.display = 'none';
            const parent = (e.target as HTMLElement).parentElement;
            if (parent) {
              const initials = document.createElement('div');
              initials.className = 'w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-300 font-medium';
              initials.textContent = alt.split(' ').map(n => n[0]).join('').toUpperCase();
              parent.appendChild(initials);
            }
          }}
        />
      </div>
      
      {status && (
        <span 
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-white dark:border-gray-900',
            size === 'sm' ? 'w-2.5 h-2.5' : 'w-3 h-3',
            status === 'online' ? 'bg-whatsapp' : 'bg-gray-300 dark:bg-gray-600'
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
