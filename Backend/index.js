import express from "express";
import { connection } from "./Config/db.js";

const app = express();

app.listen(3002, () => {
    connection();
    console.log("Listing");
});

