const userService = require('../service/user.service');
const ErrorClass = require('../util/errorClass')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')


module.exports.addUser = async (req, res, next) => {
    const existedUser = await userService.getUserByEmail(req.body.email)
    if (existedUser) {
        return next(new ErrorClass('this user already registered', 400))
    }
    const user = await userService.addUser(req.body);


    const passwordSetUrl = `${process.env.FRONT_END_URL}/setpassword/${user.passwordActivationToken}`;

    const transporter = nodemailer.createTransport(sendgridTransport({
        auth: {
            api_key: process.env.API_KEY
        }
    }))
    transporter.sendMail({
        to: req.body.email,
        from: process.env.SENDER_EMAIL,
        subject: 'Password Set Link Innova-PMS!',
        html: ` <h2>Password Set Link -  Innova-PMS</h2>
        <p>You have been invited to set your password for  Innova-PMS. Please click the link below to set your password:</p>
        <p>You can login in with this username ${user.username}</p>
        <a href="${passwordSetUrl}">Set Password</a>
        <p>If you did not request to set your password for  Innova-PMS, please ignore this email.</p>
        <p>Thank you,</p>
        <p> Innova-PMS Team</p>
        `
    });
    return res.status(201).json({
        status: "success",
        data: {
            user
        }
    });

}

module.exports.getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers()
    res.status(200).json({
        status: "success",
        data: {
            users
        }
    });

}

module.exports.getUserById = async (req, res, next) => {
    const {
        userId
    } = req.params;
    const user = await userService.getUserById(userId)
    if (!user) {
        next(new ErrorClass('This user is not found', 404))
    }
    res.status(200).json({
        status: "success",
        data: {
            user
        }
    });

}

module.exports.deleteUser = async (req, res, next) => {
    const {
        userId
    } = req.params;
    const deletedUser = await userService.deleteUser(userId)
    console.log(deletedUser)
    if (!deletedUser) {
        return next(new ErrorClass('This user is not found', 404))

    }
    res.status(200).json({
        status: "success",
        data: null
    });

}

module.exports.updateUser = async (req, res, next) => {
    const {
        userId
    } = req.params;
    const user = await userService.updateUser(userId, req.body)
    if (!user) {
        return next(new ErrorClass('This user is not found.', 404));
    }
    res.status(200).json({
        status: "success",
        data: {
            user
        }
    });

}

module.exports.getUsersNames = async (req, res) => {
    const usersNames = await userService.getUsersNames()
    res.status(200).json({
        status: "success",
        data: {
            usersNames
        }
    });
}