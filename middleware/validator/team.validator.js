const Joi = require("joi");

//____________________Team Schema Validation________________________//
const validateAddTeam = Joi
  .object()
  .required()
  .keys({
    teamName: Joi.string()
      .min(5)
      .max(20)
      .pattern(/^[A-Za-z\s\d]+$/)
      .trim()
      .required(),
    teamLeader: Joi.string().alphanum().trim().required(),
    parentTeam: Joi.string().alphanum().trim().optional().allow(null, '')
  });
  const validateUpdateTeam = Joi
  .object()
  .required()
  .keys({
    id:Joi.string(),
    teamName: Joi.string()
      .min(5)
      .max(20)
      .pattern(/^[A-Za-z\s\d]+$/)
      .trim()
      .optional(),
    teamLeader: Joi.string().alphanum().trim().optional(),
    parentTeam: Joi.string().alphanum().trim().optional().allow(null, '')
  });

module.exports ={validateAddTeam,validateUpdateTeam};
