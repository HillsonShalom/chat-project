import connection from "./connection";
import { UserCollection } from "./schemas/userSchema";
import { ChatCollection } from "./schemas/chatSchema";
import { MessageCollection } from "./schemas/messageSchema";

const user = new UserCollection({});
type User = typeof user;

const chat = new ChatCollection({});
type Chat = typeof chat;

const message = new MessageCollection({});
type Message = typeof message;

export {
  connection,
  UserCollection,
  ChatCollection,
  MessageCollection,
  User,
  Chat,
  Message,
};
