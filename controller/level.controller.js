
const levelService =require('../service/level.service.js')

module.exports.getAllLevels =async (req,res) => {
        await levelService.getAllLevelsServices().then((levels)=>{
            res.status(200).json({ status: "success", data: { levels } })
        })
      
    }

module.exports.getLevelById = async (req,res, next) => {
        const levelID = req.params.levelID;
         await levelService.getLevelByIdServices(levelID).then((level)=>{
          
            return res.status(200).json({ status: "success", data: { level } })
        }).catch((error)=>{
            next(error)
        })
        
    }


module.exports.updateLevel =async (req,res, next) => {
      
        const levelId = req.params.levelID;
        let updatedData = req.body
        await levelService.updateLevelServices(levelId, updatedData).then((level)=>{
        res.status(200).json({ status: "success" ,data:{level} })
       })
         
    }

module.exports.addNewLevel = async(req,res,next)=>{
    
    
       await levelService.addLevelServices(req.body).then((level)=>{
        res.status(201).json({ status:"success", data: {levels: level } });
       })

    }
 

 module.exports.deleteLevel = async(req,res,next)=>{
     const levelID =req.params.levelID;
     levelService.deleteLevelServices(levelID).then((level)=>{
        res.status(200).json({ status:"success", data:null});

     })

    }



