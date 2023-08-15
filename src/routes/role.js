const { roleController } = require("../controllers");
const router = require("express").Router();

router.get("/", roleController.fetch);
router.post("/create", roleController.create);
router.patch("/edit", roleController.edit);

module.exports = router;