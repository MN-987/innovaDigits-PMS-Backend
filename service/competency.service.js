const Competency = require('../data/competency.model')

module.exports.addCompetency = async (competency) => {
    return Competency.create(competency);
}

module.exports.getAllCompetencies = async () => {
    return Competency.find().populate('category', ' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0 });
    // .populate( {
    //     path: "seniorityLevels",
    //     populate : {
    //       path: "levelId",
    //       model: "Level"
    //     }
    //   }) 

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

// module.exports.filterCompetencies = async (filterQuery) => {

//     const competencies = await Competency.find({ 'teamsAssigned.teamName': filterQuery })
//         .populate('teamsAssigned') // Populate the teamsAssigned field

//     console.log(filterQuery)
//     return competencies;
// }

module.exports.filterByCategoryId = async (categoryId) => {

    const competencies = await Competency.find({ category: categoryId }).populate('category', ' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0 });
    return competencies;
}

module.exports.filterByTeamId = async (teamId) => {
    const Competencies = await Competency.find({ teamsAssigned: teamId }).populate('category', ' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0 });
    return Competencies
}

module.exports.filterByLevelId = async (levelId) => {
    const Competencies = await Competency.find({ 'seniorityLevels.level': levelId }).populate('category', ' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0 });
    return Competencies
}

// module.exports.filter = async (query, value) => {
//     const competencies = await Competency.find({ query: value }).populate('category', ' _id categoryName ').populate('seniorityLevels.level').populate('teamsAssigned').select({ __v: 0 });
//     return competencies
// }
