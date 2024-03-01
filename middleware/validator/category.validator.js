const Joi =require('joi')

module.exports.validateAddCategory =Joi.object().required().keys({
    categoryName:Joi.string().required().pattern(/^[A-za-z ]+$/).trim().min(3).max(30),
    competenciesId: Joi.array().items(Joi.string())

})

module.exports.validateUpdateCategory =Joi.object().required().keys({
    categoryId:Joi.string().required(),
    categoryName:Joi.string().required().pattern(/^[A-za-z ]+$/).trim().min(3).max(30),
    competenciesId: Joi.array().items(Joi.string())

})