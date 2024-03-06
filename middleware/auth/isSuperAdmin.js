// auth code
const jwt = require('jsonwebtoken');


module.exports = async (req, res, next) => {   
    const token = req.headers.authorization.split(" ")[1];

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (verified.role !== "superAdmin") {
        return res.status(403).json({
            status: "fail",
            data: {
                message: "You are not authorized to access this resource"
            }
        });
    }
    next();
}