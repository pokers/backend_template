const pgClient = require('../connections/postgresql')

class AccountRepository {
    constructor(){
        this._repositoryName = 'AccountRepository'
    }
    get name(){
        return this._repositoryName
    }

    async getAccountById(userId){
        const query = pgClient.select('*').from('tbl_account').where('tbl_account.id', userId)
        return await query
    }
}

module.exports = {
    AccountRepository,
}