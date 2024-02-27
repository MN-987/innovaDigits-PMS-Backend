const express =require("express");
const teamRouter = express.Router();

const {
    getAllTeams,
    addTeam,
    getTeam,
    updateTeam,
    deleteTeam,
  } = require("../controller/team.controller.js");


  teamRouter.route("/")
    .get(getAllTeams)
    .post(addTeam);

  teamRouter.route("/:id")
    .get(getTeam)
    .patch(updateTeam)
    .delete(deleteTeam);

module.exports=teamRouter;
