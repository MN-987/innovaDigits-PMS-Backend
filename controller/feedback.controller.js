
const feedBackService=require('../service/feedback.service');
const ErrorClass = require('../util/errorClass.js');

module.exports.getAllFeedbacks= async (req,res)=>{
   const feedbacks= await feedBackService.getAllFeedBack();
   res.json({ status: "success", data: { feedbacks } });

};

module.exports.getFeedbackById=async (req,res)=>{
    const feedBackId=req.params.id;
    const feedBack =await feedBackService.getFeedBackById(feedBackId);
    if(!feedBack) return next(new ErrorClass(" This Feedback is not found ",404))
    
    res.json({ status: "success", data: { feedBack } });
};


module.exports.postAddFeedback=async(req,res)=>{
    const {feedbackMainData , feedBackMetaData}=req.body ;
    
    const feedBack=await feedBackService.addFeedBack(feedbackMainData,feedBackMetaData );
    res.json({ status: "success", data: { feedBack } });
    
};

module.exports.postUpdateFeedback=(req,res)=>{
    
};

module.exports.getDeleteFeedbcak=(req,res)=>{

};