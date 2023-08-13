const { roleController } = require("../controllers");
const router = require("express").Router();

router.post("/addRole", roleController.addRole);

module.exports = router;