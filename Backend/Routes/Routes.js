import express from "express";
import { getConversation, newConversation } from "../Controllers/ConversationController.js";
import { newMessage } from "../Controllers/MessageController.js";
import { addUser, getUser } from "../Controllers/UserController.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/add", newMessage)
export default route;
