const { roleController } = require("../controllers");
const router = require("express").Router();

router.post("/create", roleController.create);

module.exports = router;