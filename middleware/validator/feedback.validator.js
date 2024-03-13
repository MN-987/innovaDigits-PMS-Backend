const joi = require('joi');


module.exports.addFeedBack = joi.object().required().keys({

    feedbackMainData: joi.object({
        userIdFrom:joi.required(),
        userIdTo: joi.required(),
        message:joi.string(),
        visibility:joi.array().items(joi.string().alphanum()).required(),
        feedbackType:joi.string().valid('normal', 'praise', 'requested').required()
    }).required(),

    feedBackMetaData: joi.array().items(joi.object({
        name: joi.string().required(),
        value: joi.any().required() 
    })).optional()

});


module.exports.updateFeedBack = joi.object().required().keys({

    id:joi.string().alphanum(),
    feedbackMainData: joi.object({
        userIdFrom:joi.optional(),
        userIdTo: joi.optional(),
        message:joi.string(),
        visibility:joi.array().items(joi.string().alphanum()).optional(),
        feedbackType:joi.string().valid('normal', 'praise', 'requested').optional()
    }).optional(),

    feedBackMetaData: joi.array().items(joi.object({
        name: joi.string().optional(),
        value: joi.any().optional() 
    })).optional()

})