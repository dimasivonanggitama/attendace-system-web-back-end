const { roleController } = require("../controllers");
const router = require("express").Router();

router.get("/", roleController.fetch);
router.post("/create", roleController.create);
router.delete("/delete", roleController.delete);
router.patch("/update", roleController.update);

module.exports = router;