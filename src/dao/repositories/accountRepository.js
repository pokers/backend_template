const pgClient = require('../connections/postgresql')

class AccountRepository {
    constructor(){
        this._repositoryName = 'AccountRepository'
    }
    get name(){
        return this._repositoryName
    }

    async getAccountById(userId, isQueryString){
        const query = pgClient.select('*').from('tbl_account').where('tbl_account.id', userId)
        if(isQueryString){
            return query.toString()
        }
        return await query
    }
}

module.exports = {
    AccountRepository,
}