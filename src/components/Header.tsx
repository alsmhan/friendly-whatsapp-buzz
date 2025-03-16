
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, MoreVertical, Phone, Video } from 'lucide-react';
import Avatar from './Avatar';
import { User } from '@/utils/types';
import { Link } from 'react-router-dom';

interface HeaderProps {
  type: 'main' | 'chat';
  title: string;
  subtitle?: string;
  user?: User;
  onBackClick?: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  type,
  title, 
  subtitle, 
  user,
  onBackClick,
  className 
}) => {
  return (
    <header 
      className={cn(
        'glass-panel bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-10 py-4 px-4 md:px-6 flex items-center border-b border-gray-100 dark:border-gray-800',
        className
      )}
    >
      {type === 'chat' && (
        <Link to="/" className="mr-3 md:mr-4">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={onBackClick}
          >
            <ArrowLeft size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </Link>
      )}
      
      {user && (
        <Avatar 
          src={user.avatar} 
          alt={user.name}
          status={user.status === 'group' ? null : user.status}
          className="mr-3 md:mr-4"
        />
      )}
      
      <div className="flex-1 min-w-0">
        <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100 truncate animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate animate-fade-in delay-100">{subtitle}</p>
        )}
      </div>
      
      <div className="flex items-center space-x-1">
        {type === 'chat' && (
          <>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Video size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Phone size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
          </>
        )}
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <MoreVertical size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </header>
  );
};

export default Header;
