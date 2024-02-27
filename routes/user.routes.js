const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../util/errorHandling");
const userValidator = require("../middleware/validator/user.validator");
const userController = require("../controller/user.controller");
const { validation } = require("../middleware/validator/validation");

router.route("/").
post(
    validation(userValidator.addUser),
    asyncHandler(userController.addUser)
).get(
    asyncHandler(userController.getAllUsers)
).put(
    validation(userValidator.updateUser),
    asyncHandler(userController.updateUser)
).delete(  
    validation(userValidator.deleteUser),
    asyncHandler(userController.deleteUser)
);


module.exports = router;
