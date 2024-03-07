const express = require('express');
const feedbackRouter = express.Router();
const feedbackControler = require("../controller/feedback.controller");
const { asyncHandler } = require("../util/errorHandling");
const { validation } = require("../middleware/validator/validation");
const router = express.Router();


router.route('/').get(
    
).post(
    asyncHandler(feedbackControler.postAddFeedback)
)

module.exports=router;