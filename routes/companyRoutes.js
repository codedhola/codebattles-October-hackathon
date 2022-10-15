const router = require("express").Router();
const controllers = require("./../controllers/companyController");

router.get("/", controllers.getCompanies);

module.exports = router;