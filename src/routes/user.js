const { userController } = require("../controllers");
const router = require("express").Router();

router.get("/", userController.fetch);
router.post("/create", userController.create);

module.exports = router;