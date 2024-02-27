const User = require('../data/user.model');

module.exports.getAllUsers = async () => {
    return User.find();
}

module.exports.getUserById = async (id) => {
    if (!id) throw new Error('Id is required');
    return User.findById(id);
}

module.exports.addUser = async (user) => {
    if (!user) throw new Error('User is required');
    return User.create(user);
}

module.exports.updateUser = async (id, user) => {
    return User.findByIdAndUpdate(id, user);
}

module.exports.deleteUser = async (id) => {
    return User.findByIdAndDelete(id);
}