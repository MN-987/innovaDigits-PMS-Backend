const Competency = require('../data/competency.model')

module.exports.addCompetency = async (competency) => {
    return Competency.create(competency);
}

module.exports.getAllCompetencies = async () => {
    return Competency.find();
}

module.exports.getCompetencyById = async (competencyId) => {
    return Competency.findById(competencyId);
}

module.exports.getCompetencyByName = async (competenyName) => {
    return Competency.find({ competenyName });
}

module.exports.updateCompetency = async (competencyId, competency) => {
    return Competency.findByIdAndUpdate(competencyId, competency);
}

module.exports.deletecompetency = async (competencyId) => {
    return Competency.findByIdAndDelete(competencyId);
}