const { NETWORK_AUTHENTICATION_REQUIRED } = require('http-status-codes');
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
        // res.cookie("token", response.token, {
        //     maxAge: 1000 * 60*60 ,
        //     httpOnly: true,
        //     sameSite: 'none',
        //     secure: true
        // });
        // res.cookie("refreshToken", response.refreshToken, {
        //     maxAge: 1000 * 60 * 60 * 24,
        //     httpOnly: true,
        //     sameSite: 'none',
        //     secure: true
        // });
        return res.status(200).json({
            status: "success",
            data: {
                message: "user authenticated successfully",
                accesToken: response.token,
                refreshToken: response.refreshToken
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
        return res.status(201).json({
            status: "success",
            data: {
                message: "Password set successfully"
            }
        });
    }
}

module.exports.getRefreshToken = async (req, res, next) => {

    // This should be getten from the header
    const refreshToken = req.body.refreshToken;

    if (!refreshToken) {
        // Here I should rediregt to login page
        return res.status(401).json({
            status: "fail",
            data: {
                error: "Unauthorized refresh token not found"
            }
        });
    }
    else {
        const response = await authService.getNewAccessToken(refreshToken);
        if (response.status === "unauthorized") {
            // Here I should rediregt to login page too
            return res.status(401).json({
                status: "fail",
                data: {
                    message: "Unauthorized user"
                }
            });
        }
        else if (response.status === "authorized") {
            const token = response.token;
            // res.cookie("token", token, {
            //     maxAge: 1000 * 60 * 60,
            //     httpOnly: true,
            //     sameSite: true,
            //     secure: true
            // });
            // return res.redirect(req.headers.referer);
            return res.status(200).json({
                status: "success",
                data: {
                    message: "Token refreshed successfully",
                    accessToken: token
                }
            });
        }
    }
}