


const levelService = require('../service/level.service.js');
const ErrorClass = require('../util/errorClass.js');

module.exports.getAllLevels = async (req, res) => {
    const levels = await levelService.getAllLevelsServices();
    res.status(200).json({ status: "success", data: { levels } });
}

module.exports.getLevelById = async (req, res, next) => {
    const levelID = req.params.levelID;
    const level = await levelService.getLevelByIdServices(levelID);
    if (!level) {
        return next(new ErrorClass('This level is not found', 404));

    }
    res.status(200).json({ status: "success", data: { level } });
}

module.exports.updateLevel = async (req, res, next) => {
    const levelID = req.params.levelID;
    const updatedData = req.body;
    const level = await levelService.updateLevelServices(levelID, updatedData);
    if (level.modifiedCount === 0) {
        return next(new ErrorClass('This level is not found.', 404));
    }

    res.status(200).json({ status: "success", data: { level } });
}


module.exports.addNewLevel = async (req, res, next) => {

    const existingLevel = await levelService.getLevelByName(req.body.levelName);
    if (existingLevel) {
        return next(new ErrorClass('Level name already exists.', 400))
    }
    const level = await levelService.addLevelServices(req.body);
    res.status(201).json({ status: "success", data: { levels: level } });
}

module.exports.deleteLevel = async (req, res, next) => {
    const levelID = req.params.levelID;
    const deletedLevel = await levelService.deleteLevelServices(levelID);
    if (deletedLevel.deletedCount === 0) {
        return next(new ErrorClass('This level is not found', 404));
    }

    res.status(200).json({ status: "success", data: null });
}