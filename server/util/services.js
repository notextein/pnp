const fs = require('fs');
const statusCodeConfig = require('../configs/status.code.config');
const serverConfig = require('../configs/server.config');
const crypto = require('crypto');
const algorithm = 'aes-128-cbc';
const ip = require('ip');

module.exports = app => {
    fs.readdir('./routes/', (err, files) => {
        if (err) return console.log('Unable to scan directory: ' + err); 
        else files.forEach(file => { require('../routes/' + file)(app); });
    });

    global.encrypt = text => {
        var mykey = crypto.createCipher(algorithm, serverConfig.password);
        var mystr = mykey.update(text, 'utf8', 'hex')
        mystr += mykey.final('hex');
        return mystr;
    }

    global.decrypt = text => {
        var mykey = crypto.createDecipher(algorithm, serverConfig.password);
        var mystr = mykey.update(text, 'hex', 'utf8')
        mystr += mykey.final('utf8');
        return mystr;
    }

    global.appMiddleware = (req, res, next) => {
        if(!(typeof req.session.token_info === 'undefined') && !(typeof req.session.profile_info === 'undefined')/* && req.session.user_info.username == decrypt(req.headers['etagege']) */) {
            next();
        }
        else {
            setFailModel({
                message: 'Not authorized to access api.',
                statusCode: statusCodeConfig.unauthorized
            }, model => {
                res.send(model);
            });
        }
    }

    global.successModel = {
        isSuccess: true,
        status: 'success',
        statusCode: statusCodeConfig.success,
        message: 'Successfully processed the request.',
        result: {}
    }

    global.failModel = {
        isSuccess: false,
        status: 'fail',
        statusCode: statusCodeConfig.fail,
        message: 'Error encountered while processing request.',
        result: {}
    }

    global.setSuccessModel = (val, cb) => {
        var isValid = !(typeof val === 'undefined');

        successModel = {
            isSuccess: true,
            statusCode: (isValid && val.hasOwnProperty('statusCode')) ? val.statusCode : statusCodeConfig.success,
            message: (isValid && val.hasOwnProperty('message')) ? val.message : 'Successfully processed the request.',
            result: (isValid && val.hasOwnProperty('result')) ? val.result : {}
        };

        if(!(typeof cb === 'undefined')) {
            cb(successModel);
        }
    }

    global.setFailModel = (val, cb) => {
        var isValid = !(typeof val === 'undefined');

        failModel = {
            isSuccess: false,
            statusCode: (isValid && val.hasOwnProperty('statusCode')) ? val.statusCode : statusCodeConfig.fail,
            message: (isValid && val.hasOwnProperty('message')) ? val.message : 'Error encountered while processing request.',
            result: (isValid && val.hasOwnProperty('result')) ? val.result : {}
        };

        if(!(typeof cb === 'undefined')) {
            cb(failModel);
        }
    }

    global.getIP = () => {
        return ip.address();
    }
}