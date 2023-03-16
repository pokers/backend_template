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

    async getAccountByBookId(bookId){
                                            // 같은 column 이름을 구분하기 위해 alias 설정
        const query = pgClient.select('*', 'ta.deleted_at AS account_deleted_at', 'tb.deleted_at AS book_deleted_at')
                        .from('tbl_mybook as tb').join('tbl_account as ta', 'tb.user_id','=','ta.id')
                        .where('tb.id', bookId)
        return await query
    }

    
}

module.exports = {
    AccountRepository,
}