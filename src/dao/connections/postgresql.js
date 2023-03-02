const knex = require('knex')

const { config } = require('../../../deploy/config/config')

const dbOptions = {
    client: 'pg',
    connection: {
        host: config.DB.HOST,
        post: config.DB.PORT,
        user: config.DB.USER,
        password: config.DB.PASSWORD,
        database: config.DB.DB_NAME,
        idleTimeoutMillis: config.DB.IDLE_TIMEOUT,
        application_name: config.DB.APP_NAME, 
    },
    pool: {
        min: config.DB.POOL_MIN,
        max: config.DB.POOL_MAX,
        idleTimeoutMillis: config.DB.IDLE_TIMEOUT,
    }
}

const pgClient = knex(dbOptions)

module.exports = pgClient



