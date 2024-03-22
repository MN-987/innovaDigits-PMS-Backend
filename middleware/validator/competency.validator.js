const joi = require('joi');


module.exports.addCompetency = joi.object().required().keys({
    name: joi.string().min(3).max(100).pattern(/^[A-Za-z\s\d]+$/).trim().required(),
    defaultDescription: joi.string().required(),
    seniorityLevels: joi.array(),
    category:joi.string().required(),
    teamsAssigned:joi.array().items(joi.string())
});
module.exports.updateCompetency = joi.object().required().keys({
    competencyId:joi.string(),
    name: joi.string().min(3).max(100).pattern(/^[A-Za-z\s\d]+$/).trim().optional(),
    defaultDescription: joi.string().optional(),
    seniorityLevels: joi.array(),
    category:joi.string().optional(),
    teamsAssigned:joi.array().items(joi.string())
})
