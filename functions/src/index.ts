import * as functions from "firebase-functions";
import express, { Request, Response } from "express";
import adonisRouter from "./routes/adonis";

const app = express();

app.use("/adonis", adonisRouter);

app.get("/hello", (req: Request, res: Response) => {
  res.send("HELLO DUDE").status(200);
});

export const api = functions.https.onRequest(app);
