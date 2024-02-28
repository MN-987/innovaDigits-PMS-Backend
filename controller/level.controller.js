
const levelService =require('../service/level.service.js')
const { ErrorClass } = require("../util/errorClass.js");

module.exports.getAllLevels =async (req,res) => {
        const levels = await levelService.getAllLevelsServices()
        return res.json({ status: "success", data: { levels } })
    }


module.exports.getLevelById = async (req,res, next) => {
        const levelID = req.params.levelID;
        const level = await levelService.getLevelByIdServices(levelID)
        if (!level) {
            return next(new ErrorClass('This level is not found', 404))
        }
        return res.json({ status: "success", data: { level } })
    }


module.exports.updateLevel =async (req,res, next) => {
      
        const levelId = req.params.levelID;
        let updatedData = req.body
        const updatedLevel = await levelService.updateLevelServices(levelId, updatedData)
        return res.status(200).json({ status: "success" ,data:{level:updatedLevel} })
    }

module.exports.addNewLevel = async(req,res,next)=>{
    
    
        const newLevel =await levelService.addLevelServices(req.body)
        return res.status(201).json({ status:"success", data: { levels: newLevel } });

    }
 

 module.exports.deleteLevel = async(req,res,next)=>{
     const levelID =req.params.levelID;
     levelService.deleteLevelServices(levelID)
     return res.status(200).json({ status:"success", data:null});

    }



