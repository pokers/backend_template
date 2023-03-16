const validator = require('validator')
const { InvalidUUID, AccountNotFound, MyBookNotFound } = require('./errorService')
const { DecoratorService } = require('./decoratorService')
const { HistoryDao } = require('../dao/historyDao')
const { AccountDao } = require('../dao/accountDao')

class TimerService {
    constructor(){
        this._serviceName = 'TimerService'
    }

    get serviceName(){
        return this._serviceName
    }

    async getTimerByBookId(bookId){

        // uuid type check
        if (!validator.isUUID(bookId)){
            throw new InvalidUUID(bookId)
        }

        const accountDao = new AccountDao()
        const historyDao = new HistoryDao()
        const decorator = new DecoratorService()

        const accountInfo = await accountDao.getAccountInfoByBookId(bookId)
        const historyInfo = await historyDao.getHistoryInfoByBookId(bookId)

        // deleted account check
        if (!accountInfo || accountInfo.data[0].account_deleted_at){
            throw new AccountNotFound(accountInfo.data[0].id)
        }

        // deleted book check
        if (!historyInfo || accountInfo.data[0].book_deleted_at){
            throw new MyBookNotFound(bookId)
        }

        // decorator
        const results = await decorator.getTimerDecorator(accountInfo, historyInfo)
        
        return results
    }


}

module.exports = { TimerService }