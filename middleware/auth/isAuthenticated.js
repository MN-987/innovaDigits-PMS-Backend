// auth code
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
   const token = req.cookies.token;
    if (!token) {
    // return next(new Error('Unauthorized: Please log in to access this resource'));
   return res.redirect('/api/v1/auth/refresh-token');
    }
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
    if (verified.exp < Date.now() / 1000) {
        // Token has expired, redirect to the refresh token endpoint
        return res.redirect('/api/v1/auth/refresh-token');
    }
        next();
}