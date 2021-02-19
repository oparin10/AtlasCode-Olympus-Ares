const app = require("express")();
const cors = require("cors");
const { default: Axios } = require("axios");
const testRouter = require("./src/routes/testRoutes");
const { functions } = require("./src/firebase");

app.options("*", cors());

app.use("/test", testRouter);

exports.app = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.api = functions.https.onRequest(app);
