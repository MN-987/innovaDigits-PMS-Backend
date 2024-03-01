const User = require('../data/user.model');

module.exports.getAllUsers = async () => {
    return User.find();
}

module.exports.getUserById = async (id) => {
    return User.findById(id);
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
module.exports.getUsers