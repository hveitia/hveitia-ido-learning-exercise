const service = require('../services/tokenService');
const genericResponse = require('../../utils/genericResponse');

exports.login = function(req, res) {

    if (req.body.username) {

        const createdToken  = service.createToken(req.body.username);

        genericResponse.success(res, {token: createdToken});

    } else {

        genericResponse.error(res,401, "Missing username field.");

    }
};

exports.verify = function(req, res) {

    genericResponse.success(res, {status: 'SUCCESS'});

};


