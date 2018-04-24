module.exports = {
  development: {
    username: 'postgres',
    password: '12345',
    database: 'eventfeedback_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    operatorsAliases: false
  }
};
