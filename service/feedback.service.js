const Feedback = require('../data/feedback.model');
const FeedbackMetadata = require('../data/feedback.metadata.model');

module.exports.addFeedBack = async (feedbackMainData, feedBackMetaData) => {
    const mainFeedBack = await Feedback.create(feedbackMainData);

    feedBackMetaData.forEach(async (metaDataObj) => {
        const metadataObj = {
            ...metaDataObj,
            feedbackId: mainFeedBack._id
        };
        await FeedbackMetadata.create(metadataObj);
    })
    return mainFeedBack;
}

module.exports.getAllFeedBack = async () => {
    const feedbacks = await Feedback.find({}).populate('userIdFrom','_id firstName lastName username').populate('userIdTo','_id firstName lastName username').populate('visibility','_id firstName lastName username');
    const allFeedbacks = [];

    for (const mainObj of feedbacks) {
        const feedbackId = mainObj._id;
        const metadata = await FeedbackMetadata.find({
            feedbackId
        });


        const feedbacksData = {
            "feedbackMainData": mainObj,
            "feedBackMetaData": metadata
        };
        allFeedbacks.push(feedbacksData);
    }

    return allFeedbacks;
}
module.exports.deleteFeedBack = async (feedBackId) => {
    await Feedback.deleteOne({_id:feedBackId});
    await FeedbackMetadata.deleteMany({feedbackId:feedBackId});
}

module.exports.getFeedBackById = async (feedBackId) => {

    const feedback = await Feedback.findOne({
        _id: feedBackId
    },{
        __v:false
    }).populate('userIdFrom','_id firstName lastName username').populate('userIdTo','_id firstName lastName username').populate('visibility','_id firstName lastName username');

    if (!feedback) return null

    const feedBackMetaData = await FeedbackMetadata.find({
        feedbackId: feedback._id
    },{
        __v:false
    });

    const feedBackObj = {
        "feedbackMainData": feedback,
        "feedBackMetaData": feedBackMetaData
    }
    return feedBackObj;
}

module.exports.updateFeedBack = async (feedbackId) => {
    const updatedFeedBack= await Feedback.findByIdAndUpdate({_id:feedbackId},{$set: {
        'feedbackType': 'normal'
    },})
    const updatedFeedBackMetadata= await FeedbackMetadata.findOneAndUpdate(
        {feedbackId,name:"feedbackStatus",value:"pending"},
        {value: 'accepted'}
        );
    return this.getFeedBackById(feedbackId);
}