
import React from 'react';
import { cn } from '@/lib/utils';
import Avatar from './Avatar';
import { Chat, User } from '@/utils/types';
import { formatTime, getOtherParticipant } from '@/utils/mockData';
import { Check, CheckCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChatItemProps {
  chat: Chat;
  otherUser: User;
  isActive?: boolean;
  className?: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ 
  chat, 
  otherUser,
  isActive = false,
  className 
}) => {
  const { lastMessage, unreadCount } = chat;
  
  const messageStatusIcon = lastMessage && lastMessage.senderId === '1' ? (
    lastMessage.status === 'read' ? 
      <CheckCheck size={16} className="text-whatsapp" /> : 
      <Check size={16} className="text-gray-400" />
  ) : null;

  return (
    <Link to={`/chat/${chat.id}`} className={cn(
      'chat-item flex items-center px-4 py-3 transition-all',
      isActive && 'bg-gray-100 dark:bg-gray-800/60',
      className
    )}>
      <Avatar 
        src={otherUser.avatar} 
        alt={otherUser.name} 
        status={otherUser.status === 'group' ? null : otherUser.status}
        className="mr-3"
      />
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">{otherUser.name}</h3>
          {lastMessage && (
            <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
              {formatTime(lastMessage.timestamp)}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-1">
          {lastMessage && (
            <p className="text-sm text-gray-600 dark:text-gray-300 truncate flex-1 pr-2">
              {lastMessage.senderId === '1' && (
                <span className="mr-1 inline-flex items-center">
                  {messageStatusIcon}
                </span>
              )}
              {lastMessage.text}
            </p>
          )}
          
          {unreadCount > 0 && (
            <span className="bg-whatsapp text-white text-xs rounded-full h-5 min-w-5 flex items-center justify-center px-1.5">
              {unreadCount}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ChatItem;
