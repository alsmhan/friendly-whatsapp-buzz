
import React from 'react';
import { chats, getUserById } from '@/utils/mockData';
import ChatItem from './ChatItem';
import Header from './Header';
import { useParams } from 'react-router-dom';
import { Search } from 'lucide-react';

const ChatList: React.FC = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const [searchTerm, setSearchTerm] = React.useState('');
  
  // Filter chats based on search term
  const filteredChats = chats.filter(chat => {
    const otherUser = chat.participantIds
      .filter(id => id !== '1')
      .map(id => getUserById(id))
      .find(user => user);
      
    if (!otherUser) return false;
    
    return otherUser.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (chat.lastMessage?.text.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-900 animate-fade-in">
      <Header 
        type="main"
        title="Messages"
      />
      
      <div className="p-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search or start new chat"
            className="bg-gray-100 dark:bg-gray-800 border-none w-full py-2 pl-10 pr-4 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-whatsapp/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400 p-4 text-center">
            <p className="mb-2">No chats found</p>
            <p className="text-sm">Try a different search term or start a new chat</p>
          </div>
        ) : (
          filteredChats.map(chat => {
            const otherUser = chat.isGroup
              ? { 
                  id: chat.id, 
                  name: chat.groupName || 'Group', 
                  avatar: '/avatars/group.jpg',
                  status: 'group' as const
                }
              : getUserById(chat.participantIds.find(id => id !== '1') || '');
              
            if (!otherUser) return null;
            
            return (
              <ChatItem 
                key={chat.id} 
                chat={chat}
                otherUser={otherUser}
                isActive={chatId === chat.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChatList;
