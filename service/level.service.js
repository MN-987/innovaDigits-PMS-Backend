
const Level = require("../data/level.model.js");


async function getAllLevelsServices(){
        const levels = await Level.find({})
        return levels;
}

async function getLevelByIdServices(levelID){
    const level = await Level.findById(levelID)
    return level
}

async function updateLevelServices(levelID,updatedData){
    const updatedLevel = await Level.updateOne({_id:levelID} ,{$set:{...updatedData}})
    return updatedLevel;
}

async function addNewLevel (){
    const newLevel = new Level()
}

async function addLevelServices(levelData){
    
        const newLevel = new Level(levelData);
        await newLevel.save();
        return newLevel;
 
}
async function deleteLevelServices(levleID){
    await Level.deleteOne({_id:levleID});

}

module.exports= {
    getAllLevelsServices,
    getLevelByIdServices,
    updateLevelServices,
    addLevelServices,
    deleteLevelServices
}
