
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];
    console.log(token);

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log(decoded);
        
        console.log(decoded.userID);
        req.userID = decoded.userID;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = 
    authMiddleware