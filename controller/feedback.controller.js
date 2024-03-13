
const feedBackService = require('../service/feedback.service');
const ErrorClass = require('../util/errorClass.js');
const Feedback = require('../data/feedback.model.js')

module.exports.getAllFeedbacks = async (req, res) => {
        // Parse pagination parameters from the request query
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 6;
        const type =req.query.type;
        const userIdFrom =req.query.userIdFrom;
        const userIdTo =req.query.userIdTo;
        const currentUserId=req.query.currentUserId || null;


    
        let query={};

        if(type=='normal' || type=='praise'){   
            query={$or:[{feedbackType:'normal'} , {feedbackType:'praise'}] , visibility:{$elemMatch:{$eq:(currentUserId)}}};
        }

        // If we want to bring the requested feedback for myself  
        else if (type=='requested' && userIdFrom){
            query={feedbackType:'requested',userIdFrom:userIdFrom}
        }
        
        // If we want to bring the pending feedback
        else{
            query={feedbackType:'requested',userIdTo:userIdTo}
        }

        // Calculate skip count based on pagination parameters
        const skip = (page - 1) * pageSize;
        
        // Fetch paginated feedbacks from the database
        
        const feedbacks = await feedBackService.paginatedFeedbacks(skip, pageSize,query)

        // Count total number of feedbacks in the database
        const totalFeedbacks = await feedBackService.totalNumberOfFeedbacks(query)

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
    }

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
    const updatedData =req.body
    const feedBack = await feedBackService.getFeedBackById(feedbackId);
    if (!feedBack) { return next(new ErrorClass(" This Feedback is not found ", 404)); }

    const updatedFeedBack = await feedBackService.updateFeedBack(feedbackId,updatedData);
    res.json({ status: "success", data: { updatedFeedBack } });
};

module.exports.getDeleteFeedbcak = async (req, res, next) => {
    const feedbackId = req.params.id;

    const feedBack = await feedBackService.getFeedBackById(feedbackId);
    if (!feedBack) { return next(new ErrorClass(" This Feedback is not found ", 404)); }

    await feedBackService.deleteFeedBack(feedbackId);
    res.json({ status: "success", message: "feedback deleted successfuly" });
};