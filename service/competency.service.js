const mongoose=require('mongoose');

const Competency = require('../data/competency.model')

module.exports.addCompetency = async (competency) => {
    return Competency.create(competency);
}

module.exports.getAllCompetencies = async () => {
    return Competency.find().populate('category', ' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0 });
}

module.exports.getCompetencyById = async (competencyId) => {
    return Competency.findById(competencyId).populate('category', ' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0 });
}

module.exports.getCompetencyByName = async (name) => {
    return Competency.findOne({ name });
}

module.exports.updateCompetency = async (competencyId, competency) => {
    return Competency.findByIdAndUpdate(competencyId, competency);
}

module.exports.deleteCompetency = async (competencyId) => {
    return Competency.findByIdAndDelete(competencyId);
}


module.exports.searchCompetencies = async (searchQuery) => {
    const competencies = await Competency.find({
        "$or": [
            { name: searchQuery }
        ]
    }).populate('category', ' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0 });
    return competencies;
}

module.exports.filter = async (condition) => {
    return await Competency.find(condition)
    .populate('category', ' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0 });
    
}

module.exports.getCompetencyForTeam=async (id)=>{
    const teamCompetencies=await Competency.find({
        teamsAssigned:new  mongoose.Types.ObjectId(id)
    }
    ).populate('seniorityLevels.level','_id levelName').populate('category','_id categoryName').select({ __v: 0 , teamsAssigned:0, createdAt:0 , updatedAt:0})
    return teamCompetencies;
}
