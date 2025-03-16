
import { User, Chat, Message } from './types';

// Mock users
export const users: User[] = [
  {
    id: '1',
    name: 'John Appleseed',
    avatar: '/avatars/john.jpg',
    status: 'online',
    lastSeen: new Date(),
  },
  {
    id: '2',
    name: 'Emma Watson',
    avatar: '/avatars/emma.jpg',
    status: 'online',
    lastSeen: new Date(),
  },
  {
    id: '3',
    name: 'David Chen',
    avatar: '/avatars/david.jpg',
    status: 'offline',
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
  },
  {
    id: '4',
    name: 'Sophie Miller',
    avatar: '/avatars/sophie.jpg',
    status: 'online',
    lastSeen: new Date(),
  },
  {
    id: '5',
    name: 'Design Team',
    avatar: '/avatars/design-team.jpg',
    isGroup: true,
    participants: ['1', '2', '3'],
    status: 'group',
  },
  {
    id: '6',
    name: 'Maria Garcia',
    avatar: '/avatars/maria.jpg',
    status: 'offline',
    lastSeen: new Date(Date.now() - 7200000), // 2 hours ago
  },
  {
    id: '7',
    name: 'Alex Johnson',
    avatar: '/avatars/alex.jpg',
    status: 'online',
    lastSeen: new Date(),
  },
  {
    id: '8',
    name: 'Family Group',
    avatar: '/avatars/family.jpg',
    isGroup: true,
    participants: ['1', '4', '6'],
    status: 'group',
  },
];

// Mock messages
export const messages: Record<string, Message[]> = {
  '2': [
    {
      id: '1',
      chatId: '2',
      senderId: '2',
      text: 'Hey, how are you doing?',
      timestamp: new Date(Date.now() - 3600000 * 3), // 3 hours ago
      status: 'read',
    },
    {
      id: '2',
      chatId: '2',
      senderId: '1',
      text: 'I\'m good! Working on that new design project. How about you?',
      timestamp: new Date(Date.now() - 3600000 * 2.5), // 2.5 hours ago
      status: 'read',
    },
    {
      id: '3',
      chatId: '2',
      senderId: '2',
      text: 'Just finished my presentation for tomorrow. Nervous but excited!',
      timestamp: new Date(Date.now() - 3600000 * 2), // 2 hours ago
      status: 'read',
    },
    {
      id: '4',
      chatId: '2',
      senderId: '1',
      text: 'You\'ll do great! Your presentations are always amazing.',
      timestamp: new Date(Date.now() - 3600000 * 1.5), // 1.5 hours ago
      status: 'read',
    },
    {
      id: '5',
      chatId: '2',
      senderId: '2',
      text: 'Thanks for the confidence boost 😊',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      status: 'read',
    },
    {
      id: '6',
      chatId: '2',
      senderId: '2',
      text: 'Want to grab coffee this weekend?',
      timestamp: new Date(Date.now() - 1800000), // 30 mins ago
      status: 'read',
    },
  ],
  '3': [
    {
      id: '7',
      chatId: '3',
      senderId: '3',
      text: 'Did you get a chance to review the proposal?',
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      status: 'read',
    },
    {
      id: '8',
      chatId: '3',
      senderId: '1',
      text: 'Yes, looks good overall. I\'ll send detailed feedback tomorrow.',
      timestamp: new Date(Date.now() - 82800000), // 23 hours ago
      status: 'read',
    },
  ],
  '4': [
    {
      id: '9',
      chatId: '4',
      senderId: '4',
      text: 'Movie night this Friday?',
      timestamp: new Date(Date.now() - 172800000), // 2 days ago
      status: 'read',
    },
    {
      id: '10',
      chatId: '4',
      senderId: '1',
      text: 'Sure! What are we watching?',
      timestamp: new Date(Date.now() - 169200000), // 47 hours ago
      status: 'read',
    },
    {
      id: '11',
      chatId: '4',
      senderId: '4',
      text: 'I was thinking the new sci-fi movie that just came out. I\'ll bring snacks!',
      timestamp: new Date(Date.now() - 86400000), // 24 hours ago
      status: 'read',
    },
  ],
  '5': [
    {
      id: '12',
      chatId: '5',
      senderId: '2',
      text: 'Team, let\'s discuss the new design system tomorrow',
      timestamp: new Date(Date.now() - 604800000), // 1 week ago
      status: 'read',
    },
    {
      id: '13',
      chatId: '5',
      senderId: '3',
      text: 'Sounds good! What time?',
      timestamp: new Date(Date.now() - 601200000), // 1 week - 1 hour ago
      status: 'read',
    },
    {
      id: '14',
      chatId: '5',
      senderId: '1',
      text: 'I can prepare some mockups for our discussion',
      timestamp: new Date(Date.now() - 518400000), // 6 days ago
      status: 'read',
    },
  ],
};

// Mock chats
export const chats: Chat[] = [
  {
    id: '2',
    participantIds: ['1', '2'],
    lastMessage: messages['2'][messages['2'].length - 1],
    unreadCount: 2,
  },
  {
    id: '3',
    participantIds: ['1', '3'],
    lastMessage: messages['3'][messages['3'].length - 1],
    unreadCount: 0,
  },
  {
    id: '4',
    participantIds: ['1', '4'],
    lastMessage: messages['4'][messages['4'].length - 1],
    unreadCount: 1,
  },
  {
    id: '5',
    participantIds: ['1', '2', '3'],
    isGroup: true,
    groupName: 'Design Team',
    lastMessage: messages['5'][messages['5'].length - 1],
    unreadCount: 0,
  },
  {
    id: '6',
    participantIds: ['1', '6'],
    lastMessage: {
      id: '15',
      chatId: '6',
      senderId: '6',
      text: 'I\'ll be in town next week. Let\'s catch up!',
      timestamp: new Date(Date.now() - 259200000), // 3 days ago
      status: 'read',
    },
    unreadCount: 0,
  },
  {
    id: '7',
    participantIds: ['1', '7'],
    lastMessage: {
      id: '16',
      chatId: '7',
      senderId: '1',
      text: 'Thanks for the restaurant recommendation. It was amazing!',
      timestamp: new Date(Date.now() - 432000000), // 5 days ago
      status: 'read',
    },
    unreadCount: 0,
  },
  {
    id: '8',
    participantIds: ['1', '4', '6'],
    isGroup: true,
    groupName: 'Family Group',
    lastMessage: {
      id: '17',
      chatId: '8',
      senderId: '4',
      text: 'Don\'t forget Mom\'s birthday this weekend!',
      timestamp: new Date(Date.now() - 172800000), // 2 days ago
      status: 'read',
    },
    unreadCount: 0,
  },
];

// Current user (you)
export const currentUser: User = {
  id: '1',
  name: 'You',
  avatar: '/avatars/you.jpg',
  status: 'online',
  lastSeen: new Date(),
};

// Helper function to get chat data
export const getChatById = (chatId: string): Chat | undefined => {
  return chats.find(chat => chat.id === chatId);
};

// Helper function to get messages for a chat
export const getMessagesForChat = (chatId: string): Message[] => {
  return messages[chatId] || [];
};

// Helper function to get user data
export const getUserById = (userId: string): User | undefined => {
  return users.find(user => user.id === userId);
};

// Helper function to get other participant in a 1:1 chat
export const getOtherParticipant = (chat: Chat): User | undefined => {
  if (chat.isGroup) return undefined;
  const otherUserId = chat.participantIds.find(id => id !== currentUser.id);
  return otherUserId ? getUserById(otherUserId) : undefined;
};

// Helper function to format time
export const formatTime = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  // Today
  if (diff < 86400000 && now.getDate() === date.getDate()) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  
  // Yesterday
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (date.getDate() === yesterday.getDate() && 
      date.getMonth() === yesterday.getMonth() && 
      date.getFullYear() === yesterday.getFullYear()) {
    return 'Yesterday';
  }
  
  // This week
  if (diff < 604800000) {
    return date.toLocaleDateString([], { weekday: 'short' });
  }
  
  // Older
  return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
};
