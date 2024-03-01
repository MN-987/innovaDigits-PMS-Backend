const authService = require('../service/auth.service.js');
const crypto = require('crypto');

module.exports.postLogin = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const response = await authService.authenticateNewUser(username, password);
    if (response.status === "unauthenticated") {
        return res.status(400).json({
            status: "fail",
            data: response.data
        });
    } else if (response.status === "authenticated") {
        res.cookie("token", response.token, {
            maxAge: 1000 * 60 * 60,
            httpOnly: true,
            sameSite: true,
            secure: true
        });
        res.cookie("refreshToken", response.refreshToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            sameSite: true,
            secure: true
        });
        return res.status(200).json({
            status: "success",
            data: {
                message: "user authenticated successfully"
            },
        });
    }
};

module.exports.postSetPassword = async (req, res, next) => {
    const token = req.params.passwordSetToken;
    const user = await authService.postSetPassword(token, req.body.password)
    if (!user) {
        return res.status(400).json({
            status: "fail",
            data: {
                message: "There was a problem while saving the password. Please try again later."
            }
        });
    } else {
        return res.status(200).json({
            status: "success",
            data: {
                message: "Password set successfully"
            }
        });
    }
}