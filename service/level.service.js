
const Level = require("../data/level.model.js");


module.exports.getAllLevelsServices = async () => {
    const levels = await Level.find({})
    return levels;
}

module.exports.getLevelByIdServices = async (levelID) => {
    const level = await Level.findById(levelID)
    return level
}

module.exports.updateLevelServices = async (levelID, updatedData) => {
  const updatedLevel = await Level.updateOne({ _id: levelID }, { $set: { ...updatedData } })
    return updatedLevel;
}

module.exports.addNewLevel = async () => {
    const newLevel = new Level()
}

module.exports.addLevelServices = async (levelData) => {

    const newLevel = new Level(levelData);
    await newLevel.save();
    return newLevel;

}

module.exports.deleteLevelServices = async (levelID) => {
   
   return await Level.deleteOne({ _id: levelID });

}

module.exports.getLevelByName=async(levelName)=>{

    const level =await Level.findOne({levelName})
    return level;
}


