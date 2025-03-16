
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { Message } from '@/utils/types';
import { getMessagesForChat, getUserById, currentUser } from '@/utils/mockData';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface ChatProps {
  className?: string;
}

const Chat: React.FC<ChatProps> = ({ className }) => {
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!chatId) return;
    
    // Load messages for this chat
    const chatMessages = getMessagesForChat(chatId);
    setMessages(chatMessages);
    
    // Scroll to bottom after messages load
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [chatId]);
  
  const handleSendMessage = (text: string) => {
    if (!chatId) return;
    
    // Create a new message
    const newMessage: Message = {
      id: `new-${Date.now()}`,
      chatId,
      senderId: currentUser.id,
      text,
      timestamp: new Date(),
      status: 'sent'
    };
    
    // Add to messages
    setMessages(prev => [...prev, newMessage]);
    
    // Scroll to bottom
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    
    // Simulate received message after delay (for demo purposes)
    if (Math.random() > 0.5) {
      setTimeout(() => {
        const otherUserId = chatId;
        const otherUser = getUserById(otherUserId);
        
        const responses = [
          "Sure, sounds good!",
          "I'll get back to you on that.",
          "That's interesting!",
          "Thanks for letting me know.",
          "Can we talk about this later?",
          "Perfect!",
          "I was just thinking about that!",
          "Got it, thanks!",
        ];
        
        const responseMessage: Message = {
          id: `new-${Date.now()}`,
          chatId,
          senderId: otherUserId,
          text: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date(),
          status: 'read'
        };
        
        setMessages(prev => [...prev, responseMessage]);
        
        toast({
          title: `New message from ${otherUser?.name}`,
          description: responseMessage.text,
          duration: 3000,
        });
        
        // Scroll to bottom
        setTimeout(() => {
          messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }, 1000 + Math.random() * 2000);
    }
  };
  
  // Find the other user in this chat
  const otherUserId = chatId;
  const otherUser = getUserById(otherUserId);
  
  if (!otherUser || !chatId) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-50 dark:bg-gray-900 p-4 text-center">
        <p className="text-gray-500 dark:text-gray-400">Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col h-full bg-white dark:bg-gray-900 animate-slide-in', className)}>
      <Header 
        type="chat"
        title={otherUser.name}
        subtitle={otherUser.status === 'online' ? 'Online' : 'Last seen recently'}
        user={otherUser}
        onBackClick={() => navigate('/')}
      />
      
      <div className="flex-1 overflow-y-auto p-4 pt-6 chat-bg">
        <div className="max-w-2xl mx-auto space-y-1">
          {messages.map((message, index) => (
            <MessageBubble 
              key={message.id}
              message={message}
              isCurrentUser={message.senderId === currentUser.id}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
