
import React from 'react';
import { useParams } from 'react-router-dom';
import ChatList from '@/components/ChatList';
import Chat from '@/components/Chat';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const isMobile = useIsMobile();
  
  // On mobile, show either chat list or chat
  if (isMobile) {
    return (
      <div className="h-screen flex flex-col overflow-hidden">
        {chatId ? (
          <Chat />
        ) : (
          <ChatList />
        )}
      </div>
    );
  }
  
  // On desktop, show both side by side
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="w-96 border-r border-gray-100 dark:border-gray-800 overflow-hidden flex-shrink-0">
        <ChatList />
      </div>
      
      <div className="flex-1 overflow-hidden">
        {chatId ? (
          <Chat />
        ) : (
          <div className="flex flex-col items-center justify-center h-full bg-gray-50 dark:bg-gray-900 chat-bg">
            <div className="glass-panel p-6 rounded-2xl max-w-md text-center animate-fade-in">
              <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Welcome to WhatsApp</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Select a chat from the sidebar to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
