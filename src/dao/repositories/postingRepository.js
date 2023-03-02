const pgClient = require('../connections/postgresql')

class PostingRepository {
    constructor(){
        this._repositoryName = 'PostingRepository'
    }
    get name(){
        return this._repositoryName
    }

    async getPostingList(userId){
        let query = pgClient.select('*').from('tbl_posting')
        if(userId){
            query = query.where('tbl_posting.user_id', userId)
        }
        const countQuery = query.clone().count().first()

        const [result, count] = await Promise.all([query, countQuery])
        return {
            data: result,
            count: count
        }
    }
}

module.exports = {
    PostingRepository,
}