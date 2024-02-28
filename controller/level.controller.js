
const {  getAllLevelsServices,  getLevelByIdServices,  updateLevelServices,addLevelServices,deleteLevelServices} =require('../service/level.service.js')
const { ErrorClass } = require("../util/errorClass.js");
const { asyncHandler } = require('../util/errorHandling.js');
const {validateLevelSchema} = require('../middleware/validator/level.validators');

let getAllLevels = asyncHandler(
    async (req,res) => {
        const levels = await getAllLevelsServices()
        return res.json({ status: "success", data: { levels } })
    }
)

let getLevelById = asyncHandler(

    async (req,res, next) => {
        const levelID = req.params.levelID;
        const level = await getLevelByIdServices(levelID)
        if (!level) {
            return next(new ErrorClass('This level is not found', 404))
        }
        return res.json({ status: "success", data: { level } })
    }
)

let updateLevel = asyncHandler(
    async (req,res, next) => {
        const {error,value} = validateLevelSchema(req.body);
        if (error) {
            return res.status(400).json({status:"error",error:error.details});
        }
        const levelId = req.params.levelID;
        let updatedData = req.body
        const updatedLevel = await updateLevelServices(levelId, updatedData)
        return res.status(200).json({ status: "success" ,data:{level:updatedLevel} })
    }
)
 let addNewLevel =asyncHandler(
    async(req,res,next)=>{
        const {error,value} = validateLevelSchema(req.body);
        if (error) {
            return res.status(400).json({status:"error",error:error.details});
        }
    
        const newLevel =await addLevelServices(req.body)
        return res.status(201).json({ status:"success", data: { levels: newLevel } });

    }
 )

 let deleteLevel =asyncHandler(
   
    async(req,res,next)=>{
     const levelID =req.params.levelID;
     deleteLevelServices(levelID)
     return res.status(200).json({ status:"success", data:null});

    }

 )
module.exports={
    getAllLevels,
    getLevelById,
    updateLevel,
    addNewLevel,
    deleteLevel
}
