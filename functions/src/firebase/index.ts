import app from "firebase-admin";

const admin = app.initializeApp();

export const bucket = admin.storage().bucket();
export const firestore = admin.firestore();


// bucket.upload('path', {origin} )


export default admin;
