const admin = require("firebase-admin");
const functions = require("firebase-functions");

const serviceAccount = require("../../serviceAccount.json");

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "atlas-ares.appspot.com",
});
const firestore = firebaseApp.firestore();
const storage = firebaseApp.storage().bucket();

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
