const userService = require('../service/user.service');


module.exports.addUser = async (req, res) => {
    const {
        firstName,
        lastName,
        username,
        email,
        position,
        level,
        role,
        team
} = req.body


    await userService.addUser(req.body).then((user) => {
        res.status(201).json({ status:"success", data: { users: user }});
    });
}

module.exports.getAllUsers = async (req, res, next) => {
    await userService.getAllUsers().then((users) => {
        res.status(200).json({status:"success",data:{users}});
    });
}

module.exports.getUserById = async (req, res, next) => {
    const {
        userId
    } = req.params;
    await userService.getUserById(userId).then((user) => {
        res.status(200).json({status:"success",data:{user}});
    });
}

module.exports.deleteUser = async (req, res, next) => {
    const {
        userId
    } = req.params;
    await userService.deleteUser(userId).then((user) => {
        res.status(200).json({status:"success",data:null});
    });
}

module.exports.updateUser = async (req, res, next) => {
    const {
        userId
    } = req.params;
    await userService.updateUser(userId, req.body).then((user) => {
        res.status(200).json({status:"success",data:{user}});
    });
}

module.exports.getUsersNames = async (req,res)=>{

}