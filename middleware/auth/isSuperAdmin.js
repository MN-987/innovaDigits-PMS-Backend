// auth code
const jwt = require('jsonwebtoken');


module.exports = async (req, res, next) => {   
    const token=req.cookies.token;
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (verified.role !== "super admin") {
        return res.status(403).json({
            status: "fail",
            data: {
                message: "You are not authorized to access this resource"
            }
        });
    }
    next();
}