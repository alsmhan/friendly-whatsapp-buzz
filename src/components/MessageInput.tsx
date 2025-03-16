
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mic, Paperclip, Send, Smile } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
  className?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ 
  onSendMessage,
  className 
}) => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className={cn('p-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800', className)}>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <button
          type="button"
          className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Smile size={22} />
        </button>
        <button
          type="button"
          className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Paperclip size={22} />
        </button>
        
        <div className="floating-input flex-1 flex items-center pl-4 pr-2 py-1">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-transparent border-none text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none text-base py-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          
          <button
            type="submit"
            className={cn(
              'p-2 rounded-full transition-all duration-200 focus:outline-none',
              message.trim() 
                ? 'text-whatsapp hover:bg-whatsapp/10' 
                : 'text-gray-400'
            )}
            disabled={!message.trim()}
          >
            {message.trim() ? <Send size={20} /> : <Mic size={20} />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
