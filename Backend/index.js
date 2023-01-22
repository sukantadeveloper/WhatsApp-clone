import express from "express";
import { connection } from "./Config/db.js";

import cors from 'cors'
import route from "./Routes/UserRoute.js";
const app = express();
app.use(express.json());

connection();
app.listen(3002, () => {
   
    console.log("Listing");
});


app.use(cors());
app.use('/', route)