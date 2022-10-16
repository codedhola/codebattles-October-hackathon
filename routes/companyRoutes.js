const router = require("express").Router();
const controllers = require("./../controllers/companyController");

router.get("/", controllers.getAllCompanies);

router.get("/:id", controllers.getCompany);

router.post("/", controllers.addCompany);

router.patch("/:id", controllers.updateCompany);

router.delete("/:id", controllers.deleteCompany);

module.exports = router;