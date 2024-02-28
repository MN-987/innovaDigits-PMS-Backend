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
        res.status(201).json(user);
    });
}

module.exports.getAllUsers = async (req, res, next) => {
    await userService.getAllUsers().then((users) => {
        res.status(200).json(users);
    });
}

module.exports.getUserById = async (req, res, next) => {
    await userService.getUserById(req.params.id).then((user) => {
        res.status(200).json(user);
    });
}

module.exports.deleteUser = async (req, res, next) => {
    const {
        id
    } = req.body;
    await userService.deleteUser(id).then((user) => {
        res.status(200).json(user);
    });
}

module.exports.updateUser = async (req, res, next) => {
    const {
        id
    } = req.body;
    await userService.updateUser(id, req.body).then((user) => {
        res.status(200).json(user);
    });
}