const Competency = require('../data/competency.model')

module.exports.addCompetency = async (competency) => {
    if (!competency) throw new Error('Competency is required');
    return Competency.create(competency);
}

module.exports.getAllCompetencies = async () => {
    return Competency.find();
}

module.exports.getCompetencyById = async (id) => {
    if (!id) throw new Error('Id is required');
    return Competency.findById(id);
}

module.exports.updateCompetency = async (competencyId, competency) => {
    return Competency.findByIdAndUpdate(competencyId, competency);
}

module.exports.deletecompetency = async (competencyId) => {
    return Competency.findByIdAndDelete(competencyId);
}