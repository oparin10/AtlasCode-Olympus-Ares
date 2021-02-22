import * as functions from "firebase-functions";
import express from "express";
import dionysusRouter from "./routes/dionysus";
import globalConfig from "../../src/global_config";

export const appConfig = globalConfig;

const app = express();

app.use("/dionysus", dionysusRouter);

export const api = functions.https.onRequest(app);
