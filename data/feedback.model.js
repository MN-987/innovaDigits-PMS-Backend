const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema({
    userIdFrom: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    userIdTo: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    message: {
        type: String
    },
    visibility: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    feedbackType: {
        type:String,
        enum: ['normal', 'praise', 'requested'],
        required:true
    }
});

module.exports = model('Feedback', feedbackSchema);
