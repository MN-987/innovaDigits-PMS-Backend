
const feedBackService=require('../service/feedback.service');

module.exports.getAllFeedbacks= async (req,res)=>{
   const feedbacks= await feedBackService.getAllFeedBack();
   res.json({ status: "success", data: { feedbacks } });

};

module.exports.getFeedbackById=(req,res)=>{

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