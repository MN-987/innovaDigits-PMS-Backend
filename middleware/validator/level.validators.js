const Joi = require("joi")



const validateLevelSchema =(level)=>{

    const schema =Joi.object({
        levelName:Joi.string().required().pattern(/^[A-za-z]+$/).trim().min(5).max(30),
    }) 
    return schema.validate(level)
}


module.exports={validateLevelSchema};
