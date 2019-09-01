module.exports = app => {
    app.get('/test', (req, res) => {
        setSuccessModel({
            message: 'Working!'
        });
        res.send(successModel);
    });

    app.post('/test', (req, res) => {
        setSuccessModel({
            message: 'Working!'
        });
        res.send(successModel);
    });
}