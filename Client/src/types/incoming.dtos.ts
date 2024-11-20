export interface Chat {
  name: string;
  photoUrl?: string;
  id: string;
}

export interface User {
  username: string;
  phone: string;
  photoUrl?: string;
  chats: Chat[];
}
