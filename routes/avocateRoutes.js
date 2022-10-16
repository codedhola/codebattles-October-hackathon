const router = require("express").Router();
const controllers = require("./../controllers/advocateController");

router.get("/", controllers.getAllAdvocates);

router.post("/", controllers.createAdvocate);

router.get("/:id", controllers.getAdvocate);

router.patch("/:id", controllers.updateAdvocate);

router.delete("/:id", controllers.deleteAdvocate);

module.exports = router;