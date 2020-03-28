const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../../utils/config');

exports.createToken = function(user)  {

    const payload = {
        sub: user,
        iat: moment().unix(),
        exp: moment().add(1, "minutes").unix(),
    };
    return jwt.sign(payload, config.TOKEN_SECRET);
};

