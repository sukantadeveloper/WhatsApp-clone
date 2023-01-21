import express from "express";
import { addUser, getUser } from "../Controllers/UserController.js";

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUser);

export default route;
