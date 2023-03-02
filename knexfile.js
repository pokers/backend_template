const { config } = require('./deploy/config/config')

const migration = {
    development:{
        client: 'pg',
        connection: {
            host: config.DB.HOST,
            post: config.DB.PORT,
            user: config.DB.USER,
            password: config.DB.PASSWORD,
            database: config.DB.DB_NAME,
        },
        migrations: {
            tableName: 'migrationv1',
            directory: './deploy/dbMigrations'
        },
        seeds: {
            directory: './deploy/dbMigrations'
        }
    }
}


module.exports = migration



