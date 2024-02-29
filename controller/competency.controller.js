const competencyService = require('../service/competency.service');
const ErrorClass = require('../util/errorClass');


module.exports.addCompetency = async (req, res) => {
    await competencyService.addCompetency(req.body).then((competency) => {
        res.status(201).json({status:"success",data:competency});
    });
}

module.exports.getCompetencyById = async (req, res, next) => {
    const competencyId = req.params.competencyId
    const competency = await competencyService.getCompetencyById(competencyId);
    if(!competency){
        return next(new ErrorClass("This competency not found",404));
    }
    await competencyService.getCompetencyById(competencyId).then((competency) => {
        res.status(200).json({status:"success",data:{competency}});
    });
}

module.exports.getAllCompetencies = async (req, res, next) => {
    await competencyService.getAllCompetencies().then((competency) => {
        res.status(200).json({status:"success",data:competency});
    });
}

module.exports.deleteCompetency = async (req, res, next) => {
    const competencyId = req.params.competencyId;
    await competencyService.deletecompetency(competencyId).then((competency) => {
        res.status(200).json({status : "success",data : null});
    });
}

module.exports.updateCompetency = async (req, res, next) => {
    const competencyId = req.params.competencyId;
    await competencyService.updateCompetency(competencyId, req.body).then((competency) => {
        res.status(200).json({status:"success",data:{competency}});
    });
}

