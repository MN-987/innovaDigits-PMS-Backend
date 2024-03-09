const express = require('express');
const feedbackRouter = express.Router();
const feedbackControler = require("../controller/feedback.controller");
const { asyncHandler } = require("../util/errorHandling");
const { validation } = require("../middleware/validator/validation");
const router = express.Router();


router.route('/').get(
    asyncHandler(feedbackControler.getAllFeedbacks)
).post(
    asyncHandler(feedbackControler.postAddFeedback)
)

router.route('/:id').get(
    asyncHandler(feedbackControler.getFeedbackById)
)
router.route('/accept/:id').post(
    asyncHandler(feedbackControler.postUpdateFeedback)
)
router.route('/delete/:id').get(
    feedbackControler.getDeleteFeedbcak
)

module.exports=router;