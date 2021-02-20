const app = require("express")();
const cors = require("cors");
const { default: Axios } = require("axios");
const testRouter = require("./src/routes/testRoutes");
const { functions } = require("./src/firebase");
const sharp = require("sharp");

app.options("*", cors());

app.use("/test", testRouter);

app.post("/testMe", cors(), (req, res) => {
  let arr = req.body.array;

  

  let myBuffer = Buffer.from(arr);

  // sharp(imgBuffer)
  //   .toFormat("webp", { nearLossless: true })
  //   .toBuffer()
  //   .then((fileBuffer) => {
  //     console.log(fileBuffer);
  //   })
  //   .catch((error) => {
  //     res.send(error).status(502);
  //   });

  return res.send(myBuffer).status(200);
});

exports.app = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.api = functions.https.onRequest(app);
