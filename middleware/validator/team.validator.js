const Joi =require("joi");

//____________________Team Schema Validation________________________//
const validateTeamSchema = (team) => {
  const schema = Joi.object({
    teamName: Joi.string().min(5).max(20).pattern(/^[A-za-z]+$/).trim().required(),
    teamLeader: Joi.string().alphanum().trim().required(),
    parentTeam: Joi.string().alphanum().trim()
  });
  return schema.validate(team,{abortEarly:false});
};

module.exports=validateTeamSchema;
