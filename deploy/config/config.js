const dotenv = require('dotenv')

const appEnv = dotenv.config({path: './deploy/env/backend.env'}).parsed
const dbEnv = dotenv.config({path: './deploy/env/postgresql.env'}).parsed

const config = {
    App: {
        ENV: process.env.APP_ENV || appEnv.APP_ENV || 'local',
        PORT: appEnv.APP_PORT || 8880,
    },
    DB: {
        HOST: dbEnv.POSTGRES_HOST || 'localhost',
        PORT: Number(dbEnv.POSTGRES_PORT) || 5432,
        USER: dbEnv.POSTGRES_USER || 'book',
        PASSWORD: dbEnv.POSTGRES_PASSWORD || 'book',
        DB_NAME: dbEnv.POSTGRES_DB_NAME || 'book',
        POOL_MAX: Number(dbEnv.POSTGRES_DB_POOL_MAX) || 50,
        POOL_MIN: Number(dbEnv.POSTGRES_DB_POOL_MIN) || 0,
        IDLE_TIMEOUT: Number(dbEnv.POSTGRES_IDLE_TIMEOUT) || 5000,
        APP_NAME: dbEnv.POSTGRES_APP_NAME || 'book',
    },
}

module.exports = {
    config,
}