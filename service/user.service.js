const User = require('../data/user.model');
const Team=require('../data/team.model');

module.exports.getAllUsers = async () => {
    return User.find().select('-passwordHash -refreshToken -passwordActivationToken').populate('level').populate({
        path:'team',
        populate:{
            path:'teamLeader parentTeam',
            select:'_id username firstName lastName teamName'
        }
    }
    );
}

module.exports.getUserById = async (id) => {
    return User.findById(id).select('-passwordHash -refreshToken -passwordActivationToken').populate('level').populate({
        path:'team',
        populate:{
            path:'teamLeader parentTeam',
            select:'_id username firstName lastName teamName'
        }
    }
    );
}

module.exports.addUser = async (user) => {
    return User.create(user);
}

module.exports.updateUser = async (id, user) => {
    return User.findByIdAndUpdate(id, user);
}

module.exports.deleteUser = async (id) => {
    return User.findByIdAndDelete(id);
}

module.exports.getUserByEmail =async(userEmail)=>{
  
  return await User.findOne({email:userEmail})
}
module.exports.getUsersNames=async()=>{
    return await User.find().select('_id username team')
}


module.exports.getPasswordSetUrl=async()=>{
    
}


module.exports.getTeamMembers=async(teamId)=>{
    const teamMembers= await User.find({team:teamId},{
        _id:true,
        firstName:true,
        lastName:true,
        username:true
    })
    return teamMembers;
  }