module.exports = {
    site: {
        name: 'QuilloStack',
        footer: 'QuilloStack 2048',
        twitter: '@sirikon',
        url: 'http://127.0.0.1:8080'
    },
    admin: {
        user: 'admin',
        password: 'admin',
        realm: 'QuilloStack'
    },
    session: {
        secret: process.env.SESSION_SECRET || 'secret',
        cookieMaxAge: 2592000000 // one month
    },
    host: {
        address: '0.0.0.0',
        port: process.env.PORT || 8080
    },
    infrastructure: {
        redisURL: process.env.REDIS_URL || 'redis://127.0.0.1:6379/',
        databaseURL: 'postgresql://postgres:12345@localhost/eventfeedback_dev'
    }
}
