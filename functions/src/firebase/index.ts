import app from "firebase-admin";

// const serviceAccount = require("../../serviceAccount.json");

const admin = app.initializeApp();

export const bucket = admin.storage().bucket();
export const firestore = admin.firestore();

export default admin;
