const dotenv = require('dotenv')

const appEnv = dotenv.config({path: '../../env/backend.env'})
const dbEnv = dotenv.config({path: '../../env/postgresql.env'})

const config = {
    App: {
        ENV: appEnv.APP_ENV || 'local',
        PORT: appEnv.APP_PORT || 8880,
    },
    DB: {
        PORT: dbEnv.POSTGRES_PORT || 5432,
        USER: dbEnv.POSTGRES_USER || 'test',
        PASSWORD: dbEnv.POSTGRES_PASSWORD || 'test',
        NAME: dbEnv.POSTGRES_DB_NAME || 'test'
    },
}


module.exports = {
    config,
}