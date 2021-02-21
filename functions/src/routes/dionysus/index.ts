import express, { Request, Response, Router } from "express";
import { optimizeAndCreateThumbnail } from "../../controllers/dionysus";
const cors = require("cors");

const dionysusRouter: Router = express.Router();

dionysusRouter.options("*", cors());

dionysusRouter.get("/", cors(), (req: Request, res: Response) => {
  return res.send("All systems go").status(200);
});

dionysusRouter.post("/optimize", optimizeAndCreateThumbnail);

export default dionysusRouter;
