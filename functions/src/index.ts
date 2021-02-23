import * as functions from "firebase-functions";
import express, { Request, Response } from "express";
import dionysusRouter from "./routes/dionysus";
import globalConfig from "../../global_config";

export const appConfig = globalConfig;

const app = express();

app.use("/dionysus", dionysusRouter);

app.get("/HELLO", (req: Request, res: Response) => {
  return res.send("HELLO").status(200);
});

export const api = functions.https.onRequest(app);
