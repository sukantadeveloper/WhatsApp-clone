import express from "express";
import { connection } from "./Config/db.js";

import cors from "cors";
import route from "./Routes/Routes.js";
const app = express();
app.use(express.json());

connection();
app.use(cors());
app.listen(3002, () => {
  console.log("Listing");
});


app.use("/", route);
