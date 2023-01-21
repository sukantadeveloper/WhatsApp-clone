import express from "express";
import { connection } from "./Config/db.js";
import bodyParser from 'body-parser';

import cors from 'cors'
import route from "./Routes/UserRoute.js";
const app = express();
app.use(express.json());

connection();
app.listen(3002, () => {
   
    console.log("Listing");
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', route)