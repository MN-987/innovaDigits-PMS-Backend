
const feedBackService = require('../service/feedback.service');
const ErrorClass = require('../util/errorClass.js');
const Feedback = require('../data/feedback.model.js')

module.exports.getAllFeedbacks = async (req, res) => {
    try {
        // Parse pagination parameters from the request query
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 6;

        // Calculate skip count based on pagination parameters
        const skip = (page - 1) * pageSize;

        // Fetch paginated feedbacks from the database
        const feedbacks = await feedBackService.paginatedFeedbacks(skip, pageSize)

        // Count total number of feedbacks in the database
        const totalFeedbacks = await feedBackService.totalNumberOfFeedbacks()

        // Calculate total number of pages
        const totalPages = Math.ceil(totalFeedbacks / pageSize);

        res.json({
            status: 'success', data: {
                currentPage: page,
                totalPages: totalPages,
                pageSize: pageSize,
                totalCount: totalFeedbacks,
                feedbacks: feedbacks,
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.getFeedbackById = async (req, res, next) => {
    const feedBackId = req.params.id;
    const feedBack = await feedBackService.getFeedBackById(feedBackId);
    if (!feedBack) return next(new ErrorClass(" This Feedback is not found ", 404))

    res.json({ status: "success", data: { feedBack } });
};


module.exports.postAddFeedback = async (req, res) => {
    const { feedbackMainData, feedBackMetaData } = req.body;

    const feedBack = await feedBackService.addFeedBack(feedbackMainData, feedBackMetaData);
    res.json({ status: "success", data: { feedBack } });

};

module.exports.postUpdateFeedback = async (req, res, next) => {
    const feedbackId = req.params.id;

    const feedBack = await feedBackService.getFeedBackById(feedbackId);
    if (!feedBack) { return next(new ErrorClass(" This Feedback is not found ", 404)); }

    const updatedFeedBack = await feedBackService.updateFeedBack(feedbackId);
    res.json({ status: "success", data: { updatedFeedBack } });
};

module.exports.getDeleteFeedbcak = async (req, res, next) => {
    const feedbackId = req.params.id;

    const feedBack = await feedBackService.getFeedBackById(feedbackId);
    if (!feedBack) { return next(new ErrorClass(" This Feedback is not found ", 404)); }

    await feedBackService.deleteFeedBack(feedbackId);
    res.json({ status: "success", message: "feedback deleted successfuly" });
};