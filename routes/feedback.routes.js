const express = require('express');
const feedbackRouter = express.Router();
const feedbackControler = require("../controller/feedback.controller");
const feedBackValidator = require("../middleware/validator/feedback.validator");
const { asyncHandler } = require("../util/errorHandling");
const { validation } = require("../middleware/validator/validation");
const router = express.Router();


router.route('/').get(
    asyncHandler(feedbackControler.getAllFeedbacks)
).post(
    validation(feedBackValidator.addFeedBack),
    asyncHandler(feedbackControler.postAddFeedback)
)

router.route('/:id').get(
    asyncHandler(feedbackControler.getFeedbackById)
)
router.route('/accept/:id').post(
    validation(feedBackValidator.updateFeedBack),
    asyncHandler(feedbackControler.postUpdateFeedback)
)
router.route('/delete/:id').get(
    feedbackControler.getDeleteFeedbcak
)

module.exports=router;