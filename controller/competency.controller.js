const competencyService = require('../service/competency.service');


module.exports.addCompetency = async (req, res) => {
    const {
        name,
        defaultDescription,
        seniorityLevels
    } = req.body
    await competencyService.addCompetency(req.body).then((competency) => {
        res.status(201).json(competency);
    });
}

module.exports.getCompetencyById = async (req, res, next) => {
    const competencyId = req.params.competencyId

    await competencyService.getCompetencyById(competencyId).then((competency) => {
        res.status(200).json(competency);
    });
}

module.exports.getAllCompetencies = async (req, res, next) => {
    await competencyService.getAllCompetencies().then((competency) => {
        res.status(200).json(competency);
    });
}

module.exports.deleteCompetency = async (req, res, next) => {
    const {
        competencyId
    } = req.body;
    await competencyService.deletecompetency(competencyId).then((competency) => {
        res.status(200).json(competency);
    });
}

module.exports.updateUser = async (req, res, next) => {
    const {
        competencyId
    } = req.body;
    await competencyService.updateCompetency(competencyId, req.body).then((competency) => {
        res.status(200).json(competency);
    });
}

