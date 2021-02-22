import app from "firebase-admin";
import { appConfig } from "..";

const serviceAccount = require("../../serviceAccount.json");

const admin = app.initializeApp({
  credential: app.credential.cert(serviceAccount),
  storageBucket: appConfig.dionysus.storageBucketPath,
});

export const bucket = admin.storage().bucket();
export const firestore = admin.firestore();

export default admin;
