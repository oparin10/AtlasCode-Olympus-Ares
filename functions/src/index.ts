import * as functions from "firebase-functions";
import express, { Request, Response } from "express";
import dionysusRouter from "./routes/dionysus";

const app = express();

app.use("/dionysus", dionysusRouter);

app.get("/hello", (req: Request, res: Response) => {
  res.send("HELLO DUDE").status(200);
});

export const api = functions.https.onRequest(app);
