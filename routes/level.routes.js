const express = require('express');
const levelController = require('../controller/level.controller');
const { asyncHandler } = require('../util/errorHandling');
const levelRouter = express.Router();
const levelValidator =require('../middleware/validator/level.validators');
const { validation } = require('../middleware/validator/validation');



levelRouter.route('/')
.get(asyncHandler(levelController.getAllLevels))
.post(validation(levelValidator.validateAddLevel),asyncHandler(levelController.addNewLevel));

levelRouter.route('/:levelID')
.get(asyncHandler(levelController.getLevelById))
.patch(validation(levelValidator.validatUpdateLevel),asyncHandler(levelController.updateLevel))
.delete(asyncHandler(levelController.deleteLevel));


module.exports = levelRouter;
