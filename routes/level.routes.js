const express = require('express');

const { addNewLevel, getAllLevels, getLevelById, updateLevel ,deleteLevel } = require('../controller/level.controller');
const { validateLevelSchema } = require('../middleware/validator/level.validators');

const levelRouter = express.Router();

levelRouter.route('/').get(getAllLevels).post(addNewLevel);

levelRouter.route('/:levelID')
.get(getLevelById)
.patch(updateLevel).delete(deleteLevel);
module.exports = levelRouter;
