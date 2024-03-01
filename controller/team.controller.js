const Teams = require("../data/team.model.js");
const ErrorClass = require("../util/errorClass.js");
const {
  getTeamByIdService,
  getAllTeamsService,
  creatTeamService,
  updateTeamService,
  deleteTeamService,
  getTeamsNamesService
} = require("../service/team.service.js");
const validateTeamSchema = require("../middleware/validator/team.validator.js");

const getAllTeams = async (req, res) => {
  const teams = await getAllTeamsService();
  res.json({ status: "success", data: { teams } });
};
const getTeam = async (req, res, next) => {
  const teamId = req.params.id;
  const team = await getTeamByIdService(teamId);
  if (!team) {
    return next(new ErrorClass("This Team not Found", 404));
  }
  return res.json({ status: "success", data: { team } });
};
const addTeam = async (req, res, next) => {
  //check if this team exists or not
  const { teamName } = req.body;
  const existedTeam = await Teams.findOne({ teamName });

  if (existedTeam) {
    next(new ErrorClass("This Team already Exists", 400));
  } else {
    const newTeam = await creatTeamService(req.body);
    res.status(201).json({ status: "success", data: { team: newTeam } });
  }
};
const updateTeam = async (req, res, next) => {
  const teamId = req.params.id;
  const team = await getTeamByIdService(teamId);
  if (!team) {
    return next(new ErrorClass("Error updating This Team not Found", 404));
  } else {
    const updatedTeam = await updateTeamService(teamId, req.body);
    return res.json({ status: "success", data: { team: updatedTeam } });
  }
};
const deleteTeam = async (req, res, next) => {
  const teamId = req.params.id;
  const team = await getTeamByIdService(teamId);
  if (!team) {
    return next(new ErrorClass("This Team not Found", 404));
  } else {
    await deleteTeamService(req.params.id);
    return res.json({
      status: "success",
      message: "The team Deleted Successfully",
    });
  }
};

const getTeamsNames=async(req,res,next)=>{
  const teamsNames= await  getTeamsNamesService();
  return res.json({
    status:"success",
    data:{
      teamsNames:teamsNames
    }
  })
}

module.exports = {
  getAllTeams,
  getTeam,
  addTeam,
  updateTeam,
  deleteTeam,
  getTeamsNames
};
