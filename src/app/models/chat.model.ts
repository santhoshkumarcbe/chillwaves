export interface Chat {
    chatId: number;
    senderId: number | string;
    receiverId: number;
    message: string;
    time: Date;
  }
  