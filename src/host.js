const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const RedisStore = require('connect-redis')(session);
const enforce = require('express-sslify');

const routes = require('./routes');
const config = require('./config');

const debug = process.env.NODE_ENV !== 'production';

module.exports = () => {
    const app = express();

    app.use((req, res, next) => {
        res.locals.config = config;
        next();
    });

    app.set('view engine', 'html');
    app.engine('html', ejs.renderFile);
    app.set('views', path.join(__dirname, '/views'));
    app.set('layout', path.join(__dirname, '/views/layouts/layout'));

    if (!debug) {
        app.use(enforce.HTTPS({ trustProtoHeader: true }));
    }

    app.use(expressLayouts);

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(session({
        store: new RedisStore({
            url: config.infrastructure.redisURL
        }),
        secret: config.session.secret,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: config.session.cookieMaxAge
        }
    }))

    routes(app);

    app.listen(config.host.port, config.host.address);
}
