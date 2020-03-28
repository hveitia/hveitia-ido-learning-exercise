
exports.success = (res, data) => {

    res.status(200).jsonp({status: 'SUCCESS', data: data});
};

exports.error = (res, status = 500, message = 'Internal Error', data = {}) => {

    res.status(status).jsonp({status: 'ERROR', data: data, message: message});
};
