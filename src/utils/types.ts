
export interface User {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'group';
  lastSeen?: Date;
  isGroup?: boolean;
  participants?: string[];
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  media?: string;
}

export interface Chat {
  id: string;
  participantIds: string[];
  lastMessage?: Message;
  unreadCount: number;
  isGroup?: boolean;
  groupName?: string;
}
