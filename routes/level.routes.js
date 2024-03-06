const express = require('express');
const levelController = require('../controller/level.controller');
const { asyncHandler } = require('../util/errorHandling');
const levelRouter = express.Router();
const levelValidator = require('../middleware/validator/level.validators');
const { validation } = require('../middleware/validator/validation');



levelRouter.route('/')
    .get(asyncHandler(levelController.getAllLevels))
    .post(validation(levelValidator.validateAddLevel), asyncHandler(levelController.addNewLevel));

levelRouter.route('/edit/:levelID').post(validation(levelValidator.validateUpdateLevel), asyncHandler(levelController.updateLevel))


levelRouter.route('/:levelID').get(asyncHandler(levelController.getLevelById))
levelRouter.route('/delete/:levelID').get(asyncHandler(levelController.deleteLevel));


module.exports = levelRouter;
