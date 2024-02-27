const Teams =require("../data/team.model.js");

const getTeamByIdService = async (teamId) => {
  return await Teams.findById({ _id: teamId }, { __v: 0 });
};

const getAllTeamsService = async () => {
  return await Teams.find({}, { __v: 0 });
};

const creatTeamService = async (data) => {
  // await Teams.create(data);
  const newTeam = new Teams({
    teamName: data.teamName,
    teamLeader: data.teamLeader,
    parentTeam: data.parentTeam
  });
  await newTeam.save();
  return await Teams.findOne(newTeam._id , { __v: 0 });
};

const updateTeamService = async (id, updateData) => {
  return await Teams.findByIdAndUpdate({ _id: id }, updateData, {
    new: true,
    projection: { __v: 0 },
  });
};

const deleteTeamService = async (id) => {
  await Teams.deleteOne({ _id: id });
};

module.exports={
  getTeamByIdService,
  getAllTeamsService,
  creatTeamService,
  updateTeamService,
  deleteTeamService
}
