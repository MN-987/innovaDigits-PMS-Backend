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

module.exports.getFeedBack = async () => {

}