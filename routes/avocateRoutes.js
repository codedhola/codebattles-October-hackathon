const router = require("express").Router();
const controllers = require("./../controllers/advocateController");

router.get("/", controllers.getAdvocates);

module.exports = router;