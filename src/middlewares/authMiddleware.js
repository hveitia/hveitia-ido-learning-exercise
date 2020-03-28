const jwt = require('jsonwebtoken');
const config = require('../utils/config');

exports.ensureAuthenticated = function(req, res, next){

    if(!req.headers.authorization) {

        return res
            .status(403)
            .send({message: "Missing authorization header"});
    }

    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, config.TOKEN_SECRET, function(err, payload) {

        if (err) {

            switch (err.name) {
                case 'JsonWebTokenError':
                    return res.status(401).send({message: "Invalid Token."});
                case 'TokenExpiredError':
                    return res.status(401).send({message: "Token expired."});
                default:
                    return res.status(401).send({message: "Invalid Token."});
            }
        }

        req.user = payload.sub;
        next();
    });
};
