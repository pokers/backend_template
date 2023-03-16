const pgClient = require('../connections/postgresql')

class HistoryRepository {
    constructor(){
        this._repositoryName = 'HistoryRepository'
    }
    get name(){
        return this._repositoryName
    }


    async getHistoryListByBookId(bookId){
        // 같은 column 이름을 구분하기 위해 deleted_at에 alias 설정
        const query = pgClient.select('*', 'tb.deleted_at AS book_deleted_at', 'th.deleted_at AS history_deleted_at')
                        .from('tbl_mybook as tb').join('tbl_myhistory as th', 'tb.id','=','th.mybook_id')
                        .where('tb.id', bookId)

        return await query


    }
}

module.exports = {
    HistoryRepository
}