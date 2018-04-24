const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const basicAuth = require('express-basic-auth');
const RedisStore = require('connect-redis')(session);
const enforce = require('express-sslify');

const indexController = require('./controllers/index');
const talksController = require('./controllers/talks');
const adminController = require('./controllers/admin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = () => {
    const app = express();

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
        store: new RedisStore(debug ? {
            host: '127.0.0.1',
            port: '6379'
        } : {
            url: process.env.REDIS_URL
        }),
        secret: process.env.REDIS_SECRET || 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 2592000000 // one month
        }
    }))

    app.use('/' , express.static(path.join(__dirname, '/favicons')));
    app.use('/static' , express.static(path.join(__dirname, '/static')));

    app.get('/', indexController.getIndex);
    app.get('/talk/:slug', talksController.getTalkById);
    app.post('/talk/:slug', talksController.postFeedback);

    app.get('/admin', basicAuth({
        users: { 'admin': 'admin' },
        challenge: true,
        realm: 'event-feedback'
    }), adminController.getIndex);

    app.listen(process.env.PORT || 8080, '0.0.0.0');
}
