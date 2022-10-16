const router = require("express").Router();
const controllers = require("./../controllers/companyController");

router.get("/", controllers.getAllCompanies);

router.post("/", controllers.addCompany);

router.get("/:id", controllers.getCompany);

router.patch("/:id", controllers.updateCompany);

router.delete("/:id", controllers.deleteCompany);

module.exports = router;