const { userController } = require("../controllers");
const router = require("express").Router();

router.get("/", userController.fetch);

module.exports = router;