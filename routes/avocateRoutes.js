const router = require("express").Router();
const controllers = require("./../controllers/advocateController");

router.get("/", controllers.getAllAdvocates);

router.post("/", controllers.createAdvocate);

router.get("/:id", controllers.getAdvocate);

module.exports = router;