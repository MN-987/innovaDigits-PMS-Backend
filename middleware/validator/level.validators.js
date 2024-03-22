const Joi = require("joi")

module.exports.validateAddLevel =Joi.object().required().keys({
    levelName:Joi.string().required().pattern(/^[A-za-z ]+$/).trim().min(3).max(30)
})


module.exports.validateUpdateLevel=Joi.object().required().keys({
    levelID:Joi.string().required(),
    levelName:Joi.string().required().pattern(/^[A-za-z ]+$/).trim().min(3).max(30)
})