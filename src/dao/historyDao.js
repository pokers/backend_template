const { HistoryRepository } = require('./repositories/historyRepository')
const { AccountNotFound } = require('../services/errorService')
class HistoryDao {
    constructor(){
        this._daoName = 'HistoryDao'
    }

    get daoName(){
        return this._daoName
    }

    async getHistoryInfoByBookId(bookId){
        const historyRepo = new HistoryRepository()

        const historyInfo = await historyRepo.getHistoryListByBookId(bookId)

        const result = {
            data : historyInfo
        }
        return result
    }
}

module.exports = { HistoryDao }