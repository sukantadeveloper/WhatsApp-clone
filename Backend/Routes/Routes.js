import express from "express";
import { getConversation, newConversation } from "../Controllers/ConversationController.js";
import { getImage, uploadFile } from "../Controllers/ImageController.js";
import { getMessage, newMessage } from "../Controllers/MessageController.js";
import { addUser, getUser } from "../Controllers/UserController.js";
import Upload from "../Middleware/upload.js"
const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage)
route.get("/message/get/:id",getMessage)

// route.post("/file/upload",Upload.single("file"), uploadFile)
// route.get('/file/:filename', getImage);

export default route;
