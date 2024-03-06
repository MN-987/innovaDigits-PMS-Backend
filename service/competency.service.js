const Competency = require('../data/competency.model')

module.exports.addCompetency = async (competency) => {
    return Competency.create(competency);
}

module.exports.getAllCompetencies = async () => {
    return Competency.find().populate('category',' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0 });
    // .populate( {
    //     path: "seniorityLevels",
    //     populate : {
    //       path: "levelId",
    //       model: "Level"
    //     }
    //   }) 
       
}

module.exports.getCompetencyById = async (competencyId) => {
    return Competency.findById(competencyId).populate('category',' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0});
}

module.exports.getCompetencyByName = async (name) => {
    return Competency.findOne({ name });
}

module.exports.updateCompetency = async (competencyId, competency) => {
    return Competency.findByIdAndUpdate(competencyId, competency);
}

module.exports.deletecompetency = async (competencyId) => {
    return Competency.findByIdAndDelete(competencyId);
}