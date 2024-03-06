const Competency = require('../data/competency.model');
const competencyService = require('../service/competency.service');
const ErrorClass = require('../util/errorClass');


module.exports.addCompetency = async (req, res,next) => {
  const { name } = req.body;
  const existedCompetency = await competencyService.getCompetencyByName(name);

  if (existedCompetency) {
   return next(new ErrorClass("This Competency already Exists", 400));
  } else {
    const newCompetency = await competencyService.addCompetency(req.body);
    res.status(201).json({ status: "success", data: { competency:newCompetency } });
  }
}

module.exports.getCompetencyById = async (req, res, next) => {
    const competencyId = req.params.competencyId
    const competency = await competencyService.getCompetencyById(competencyId);
    if(!competency){
        return next(new ErrorClass("This competency not found",404));
    }
    const foundedCompetency=await competencyService.getCompetencyById(competencyId);
    res.status(200).json({status:"success",data:{foundedCompetency}});
    
}

module.exports.getAllCompetencies = async (req, res, next) => {
   const competencyes= await competencyService.getAllCompetencies();
   res.status(200).json({status:"success",data:competencyes});
}

module.exports.deleteCompetency = async (req, res, next) => {
    const competencyId = req.params.competencyId;
    const competency = await competencyService.getCompetencyById(competencyId);
    if(!competency){
        return next(new ErrorClass("This competency not found",404));
    }
    await competencyService.deletecompetency(competencyId)
    res.status(200).json({status : "success",data : null});
}

module.exports.updateCompetency = async (req, res, next) => {
    const competencyId = req.params.competencyId;
    const competency = await competencyService.getCompetencyById(competencyId);
    if(!competency){
        return next(new ErrorClass("This competency not found",404));
    }
    const updatedCompetency=await competencyService.updateCompetency(competencyId, req.body);
    res.status(200).json({status:"success",data:{updatedCompetency}});
}

module.exports.search = async (req, res) => {
    try {
        const data = await Competency.find({
            "$or": [
                { name: { $regex: req.query.comp, $options: 'i' } } 
            ]
        });
        res.status(200).json({status:"success",data});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

