const express =require("express");
const teamRouter = express.Router();

const {
    getAllTeams,
    addTeam,
    getTeam,
    updateTeam,
    deleteTeam,
  } = require("../controller/team.controller.js");
const { validation } = require("../middleware/validator/validation");
const { asyncHandler } = require("../util/errorHandling.js");
const { validateAddTeam, validateUpdateTeam } = require("../middleware/validator/team.validator.js");



  teamRouter.route("/")
    .get(asyncHandler(getAllTeams))
    .post(validation(validateAddTeam), asyncHandler(addTeam));

  teamRouter.route("/:id")
    .get(asyncHandler(getTeam))
    .patch(validation(validateUpdateTeam), asyncHandler(updateTeam))
    .delete(asyncHandler(deleteTeam));

module.exports=teamRouter;
