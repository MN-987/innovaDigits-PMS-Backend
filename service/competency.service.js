const Competency = require('../data/competency.model')
const { ErrorClass } = require("../util/errorClass");

module.exports.addCompetency = async (competency) => {
    if (!competency) throw new Error('Competency is required');
    return Competency.create(competency);
}

module.exports.getAllCompetencies = async () => {
    return Competency.find();
}

module.exports.getCompetencyById = async (competencyId) => {
    return Competency.findById(competencyId);
}

module.exports.updateCompetency = async (competencyId, competency) => {
    return Competency.findByIdAndUpdate(competencyId, competency);
}

module.exports.deletecompetency = async (competencyId) => {
    return Competency.findByIdAndDelete(competencyId);
}