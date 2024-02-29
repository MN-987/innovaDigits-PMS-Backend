const joi = require('joi');


module.exports.addCompetency = joi.object().required().keys({
    name: joi.string().min(3).max(100).required(),
    defaultDescription: joi.string(),
    seniorityLevels: joi.array(),
    category:joi.string(),
    teamsAssigned:joi.array().items(joi.string())
})
