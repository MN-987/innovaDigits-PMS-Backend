const Competency = require('../data/competency.model')

module.exports.addCompetency = async (competency) => {
    return Competency.create(competency);
}

module.exports.getAllCompetencies = async () => {
    return Competency.find().populate('category',' _id categoryName ')
    // .populate({
    //     path: 'seniorityLevels.levelId', 
    //     model: 'Level',
    //     select: '_id levelName', 
    //   }).select({ __v: 0 });
}

module.exports.getCompetencyById = async (competencyId) => {
    return Competency.findById(competencyId);
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