const admin = require("firebase-admin");
const functions = require("firebase-functions");

const firebaseApp = admin.initializeApp();
const firestore = firebaseApp.firestore();
const storage = firebaseApp.storage();

if (process.env.NODE_ENV !== "production") {
  firestore.settings({
    host: "localhost:8080",
    ssl: false,
  });
}

module.exports = {
  firestore,
  storage,
  functions,
};
