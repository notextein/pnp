const request = require('request');
const serverConfig = require('../configs/server.config');
const apisConfig = require('../configs/apis.config');

exports.login = (req, callback) => {
    var requestBody  = req.body;

    var options = { 
        method: 'POST',
        url: apisConfig.login.url,
        headers: {
            'content-type': 'application/json'
        },
        // proxy: serverConfig.proxy,
        body: requestBody,
        json: true,

    };
    
    request(options, (error, response, body) => {
        if(error) {
            setFailModel({
                message: 'Unable to login, please check your internet connection.',
                result: error
            });
            callback(false);
        } else {
            if(body.reason && body.reason == 'INVALID_CREDENTIAL') {
                setFailModel({
                    message: 'Username or password is incorrect. Please try again.',
                    result: body
                });
                callback(false);
            }
            else {    
                req.session.token_info = body.tokens;
                req.session.profile_info = body.profile;

                setSuccessModel({
                    result: body.profile
                });
                callback(true);
            }
        }
    });
}