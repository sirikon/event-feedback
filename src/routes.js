const path = require('path');
const express = require('express');
const basicAuth = require('express-basic-auth');

const indexController = require('./controllers/index');
const talksController = require('./controllers/talks');
const adminController = require('./controllers/admin');

const config = require('./config');

module.exports = (app) => {
    app.use('/' , express.static(path.join(__dirname, '/favicons')));
    app.use('/static' , express.static(path.join(__dirname, '/static')));

    app.get('/', indexController.getIndex);
    app.get('/talk/:slug', talksController.getTalkById);
    app.post('/talk/:slug', talksController.postFeedback);

    app.get('/admin', basicAuth({
        users: { [config.admin.user]: config.admin.password },
        challenge: true,
        realm: config.admin.realm
    }), adminController.getIndex);
}
