import * as functions from "firebase-functions";
import express from "express";
import dionysusRouter from "./routes/dionysus";

const app = express();

// const corsOptions = {
//   allowedHeaders: [
//     "Origin",
//     "X-Requested-With",
//     "Content-Type",
//     "Accept",
//     "X-Access-Token",
//   ],
//   credentials: true,
//   methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//   origin: "*",
//   preflightContinue: false,
// };

app.use("/dionysus", dionysusRouter);

export const api = functions.https.onRequest(app);
