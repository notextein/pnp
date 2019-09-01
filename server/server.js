const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const history = require('connect-history-api-fallback');
const morgan = require('morgan');
const serverConfig = require('./configs/server.config');
require('./util/services')(app);

if(!(typeof process.argv[2] === 'undefined')) {
    app.use(history());
    app.use('/', express.static(path.join(__dirname, '/client/'), {
      setHeaders: (res, path) => {
        res.set('Cache-Control', 'no-cache');
      }
    }));
}

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '1000mb', type: 'application/json' }));
app.use(cookieParser());
app.use(session({
  secret: 'Pruone Web',
  rolling: true,
  resave: true,
  saveUninitialized: true,
  httpOnly: true,
  secure: true,
  cookie: {
    maxAge: 1000 * 60 * 15
  }
}));

app.listen(serverConfig.port, () => {
    console.log('Listening to port: ' + serverConfig.port);
});