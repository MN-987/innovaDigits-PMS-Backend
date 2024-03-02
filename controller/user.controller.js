const userService = require('../service/user.service');
const ErrorClass = require('../util/errorClass')

module.exports.addUser = async (req, res, next) => {
    const existedUser = await userService.getUserByEmail(req.body.email)
    if(existedUser){
        return next(new ErrorClass('this user already registered',400))
    }
    const user = await userService.addUser(req.body);
    return res.status(201).json({ status: "success", data: { user } });

}

module.exports.getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers()
    res.status(200).json({ status: "success", data: { users } });

}

module.exports.getUserById = async (req, res, next) => {
    const {
        userId
    } = req.params;
    const user = await userService.getUserById(userId)
    if (!user) {
        next(new ErrorClass('This user is not found', 404))
    }
    res.status(200).json({ status: "success", data: { user } });

}

module.exports.deleteUser = async (req, res, next) => {
    const {
        userId
    } = req.params;
    const deletedUser = await userService.deleteUser(userId)
    console.log(deletedUser)
    if (!deletedUser){
       return next(new ErrorClass('This user is not found', 404))
    }
    res.status(200).json({ status: "success", data: null });

}

module.exports.updateUser = async (req, res, next) => {
    const {
        userId
    } = req.params;
    const user = await userService.updateUser(userId, req.body)
    if (!user) {
        return next(new ErrorClass('This user is not found.', 404));
    }
    res.status(200).json({ status: "success", data: { user } });

}

module.exports.getUsersNames = async (req, res) => {
    const usersNames = await userService.getUsersNames()
    res.status(200).json({ status: "success", data: { usersNames } }); 
}