const mongoose = require('mongoose');
const { Schema } = mongoose;

const FeedbackMetaDataSchema = new Schema({
    feedbackId: {
        type: Schema.Types.ObjectId,
        ref: 'Feedback'
    },
    name: String,
    value: String
});

module.exports = mongoose.model('FeedbackMetadata', FeedbackMetaDataSchema);
