const controller = require('../controllers/security.controller');

module.exports = app => {
    app.post('/security/login', (req, res) => {
        controller.login(req, cb => {
            res.send((cb) ? successModel : failModel);
        });
    });

    app.post('/security/logout', (req, res) => {
        req.session.destroy(error => {
            setSuccessModel({
                message: 'User session has successfully ended.',
                statusCode: (req.body.statusCode) ? req.body.statusCode : 0
            });
            res.send(successModel);
        });
    });
}