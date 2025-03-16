
import React from 'react';
import { cn } from '@/lib/utils';
import { Message } from '@/utils/types';
import { Check, CheckCheck } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
  showTimestamp?: boolean;
  className?: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ 
  message, 
  isCurrentUser,
  showTimestamp = true,
  className 
}) => {
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(message.timestamp);
  
  const statusIcon = isCurrentUser ? (
    message.status === 'read' ? 
      <CheckCheck size={14} className="text-whatsapp fill-whatsapp" /> : 
      message.status === 'delivered' ?
        <CheckCheck size={14} className="text-gray-400" /> :
        <Check size={14} className="text-gray-400" />
  ) : null;

  return (
    <div 
      className={cn(
        'flex mb-2',
        isCurrentUser ? 'justify-end' : 'justify-start',
        className
      )}
    >
      <div
        className={cn(
          'message-bubble',
          isCurrentUser ? 'message-outgoing rounded-tr-none' : 'message-incoming rounded-tl-none',
          'group'
        )}
      >
        {message.text}
        
        <div className="flex items-center justify-end mt-1 space-x-1">
          {showTimestamp && (
            <span className="text-[10px] text-gray-500 dark:text-gray-400 opacity-70 group-hover:opacity-100 transition-opacity">
              {formattedTime}
            </span>
          )}
          {statusIcon && <span className="ml-1">{statusIcon}</span>}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
