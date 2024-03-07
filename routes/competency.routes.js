const express = require("express");
const router = express.Router();
const competencyValidator = require("../middleware/validator/competency.validator");
const competencyController = require("../controller/competency.controller");
const { asyncHandler } = require("../util/errorHandling");
const { validation } = require("../middleware/validator/validation");

router.route("/").
    // router.post(competencyController.addCompetency)
    // router.get(competencyController.getAllCompetencies)
    post(
        validation(competencyValidator.addCompetency),
        asyncHandler(competencyController.addCompetency)
    )
    .get(
        asyncHandler(competencyController.getAllCompetencies)
    );
router.route("/search").get(asyncHandler(competencyController.search))
router.route("/filter").get(asyncHandler(competencyController.filter))

router.route("/:competencyId")
    .get(
        asyncHandler(competencyController.getCompetencyById)
    )
router.route("/edit/:competencyId")
    .post(
        validation(competencyValidator.updateCompetency),
        asyncHandler(competencyController.updateCompetency)
    )
router.route("/delete/:competencyId")
    .get(
        asyncHandler(competencyController.deleteCompetency)
    );



module.exports = router;
