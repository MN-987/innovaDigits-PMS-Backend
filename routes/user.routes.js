const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../util/errorHandling");
const userValidator = require("../middleware/validator/user.validator");
const userController = require("../controller/user.controller");
const { validation } = require("../middleware/validator/validation");

router.route("/")
.post(
    validation(userValidator.addUser),
    asyncHandler(userController.addUser)
).get(
    asyncHandler(userController.getAllUsers)
)

router.route('/usernames').get(
    asyncHandler(userController.getUsersNames)
)


router.route("/:userId").get( asyncHandler(userController.getUserById))


router.route('/edit/:userId').post(
    validation(userValidator.updateUser),
    asyncHandler(userController.updateUser)
)

router.route('/delete/:userId').get(  
    validation(userValidator.deleteUser),
    asyncHandler(userController.deleteUser)
);


module.exports = router;
