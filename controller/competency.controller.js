const Competency = require('../data/competency.model');
const competencyService = require('../service/competency.service');
const ErrorClass = require('../util/errorClass');
const { asyncHandler } = require('../util/errorHandling');


module.exports.addCompetency = async (req, res, next) => {
    const { name } = req.body;
    const existedCompetency = await competencyService.getCompetencyByName(name);

    if (existedCompetency) {
        return next(new ErrorClass("This Competency already Exists", 400));
    } else {
        const newCompetency = await competencyService.addCompetency(req.body);
        res.status(201).json({ status: "success", data: { competency: newCompetency } });
    }
}

module.exports.getCompetencyById = async (req, res, next) => {
    const competencyId = req.params.competencyId
    const competency = await competencyService.getCompetencyById(competencyId);
    if (!competency) {
        return next(new ErrorClass("This competency not found", 404));
    }
    const foundedCompetency = await competencyService.getCompetencyById(competencyId);
    res.status(200).json({ status: "success", data: { foundedCompetency } });

}

module.exports.getAllCompetencies = async (req, res, next) => {
    const competencyes = await competencyService.getAllCompetencies();
    res.status(200).json({ status: "success", data: competencyes });
}

module.exports.deleteCompetency = async (req, res, next) => {
    const competencyId = req.params.competencyId;
    const competency = await competencyService.getCompetencyById(competencyId);
    if (!competency) {
        return next(new ErrorClass("This competency not found", 404));
    }
    await competencyService.deletecompetency(competencyId)
    res.status(200).json({ status: "success", data: null });
}

module.exports.updateCompetency = async (req, res, next) => {
    const competencyId = req.params.competencyId;
    const competency = await competencyService.getCompetencyById(competencyId);
    if (!competency) {
        return next(new ErrorClass("This competency not found", 404));
    }
    const updatedCompetency = await competencyService.updateCompetency(competencyId, req.body);
    res.status(200).json({ status: "success", data: { updatedCompetency } });
}

module.exports.search = async (req, res, next) => {
    const searchQuery = { $regex: req.query.comp, $options: 'i' };
    const competencies = await competencyService.searchCompetencies(searchQuery);
    if (!competencies.length) {
        next(new ErrorClass('no matched competencies', 404))
    }
    res.status(200).json({ status: "success", data: { competencies } });

}

module.exports.filter = async (req, res, next) => {

    const filterQuery = {};
    let competencies;

    if (req.query.categoryId) {
        filterQuery.categoryId = req.query.categoryId;
            competencies = await competencyService.filter({category:filterQuery.categoryId});
        
    }else if (req.query.teamId) {
        filterQuery.teamId = req.query.teamId
            competencies = await competencyService.filter({teamsAssigned:filterQuery.teamId});
    }else{
        filterQuery.levelId = req.query.levelId;
            competencies = await competencyService.filter({'seniorityLevels.level':filterQuery.levelId});
    }
    
    if (!competencies.length) {
        return next(new ErrorClass('no matched competencies', 404))
    }else res.status(200).json({ status: "success", data: { competencies } });

}

module.exports.getCompetencyForTeam=async(req,res,next)=>{
    const teamId=req.params.teamId;
    const teamCompetencies=await competencyService.getCompetencyForTeam(teamId  );

    if(!teamCompetencies){
        return next(new ErrorClass('no matched teams',404))
    }
    res.status(200).json({ status: "success",data:{teamCompetencies} });

}