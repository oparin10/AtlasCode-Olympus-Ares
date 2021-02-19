const app = require("express");
const testController = require("../../controllers/testController/");

const router = app.Router();

router.get("/", testController.testIndex);

router.get("/super", testController.testSuper);

module.exports = router;
