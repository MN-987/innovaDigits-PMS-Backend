
const Level = require("../data/level.model.js");
// const ErrorClass =require('../util/errorClass.js')


module.exports.getAllLevelsServices = async () => {
    const levels = await Level.find({})
    return levels;
}

module.exports.getLevelByIdServices = async (levelID) => {
    // if (!levelID) {
    //     return next(new ErrorClass('This level is not found', 404))
    // }
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
    if (!levelID) {
        return new ErrorClass('This level is not found', 404)
    }
    await Level.deleteOne({ _id: levelID });

}


