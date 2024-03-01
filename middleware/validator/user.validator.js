// validation code
const joi = require('joi');

module.exports.addUser = joi.object().required().keys({
    firstName: joi.string().min(2).max(15).pattern(/^[A-za-z]+$/).trim().required(),
    lastName: joi.string().min(2).max(15).pattern(/^[A-za-z]+$/).trim().required(),
    username: joi.string().alphanum().min(3).max(15).required(),
    email: joi.string().email().required(),
    position: joi.string().pattern(/^[A-Za-z ]+$/).trim().required(),
    level: joi.string().alphanum().trim().required(),
    role: joi.string().pattern(/^[A-Za-z ]+$/).trim().required(),
    team: joi.string().alphanum().trim().required()
});

module.exports.updateUser =joi.object().required().keys( {
    userId: joi.string().required(),
    firstName: joi.string().min(2).max(15).pattern(/^[A-Za-z]+$/).trim().optional(),
    lastName: joi.string().min(2).max(15).pattern(/^[A-Za-z]+$/).trim().optional(),
    username: joi.string().alphanum().min(3).max(15).optional(),
    email: joi.string().email().optional(),
    position: joi.string().pattern(/^[A-Za-z ]+$/).trim().optional(),
    level: joi.string().pattern(/^[A-Za-z ]+$/).trim().optional(),
    role: joi.string().pattern(/^[A-Za-z ]+$/).trim().optional(),
    team: joi.string().pattern(/^[A-Za-z ]+$/).trim().optional()
});


module.exports.deleteUser =joi.object().required().keys( {
    userId: joi.string().required()
}); 


module.exports.setPassword=joi.object().required().keys({
    passwordSetToken:joi.string().required(),
    password:joi.string().required(),
    confirmPassword:joi.string().required().valid(joi.ref('password'))
})