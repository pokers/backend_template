const validator = require('validator')
const { InvalidUUID } = require('./errorService')
const { AccountDao } = require('../dao/accountDao')

class AccountService {
    constructor(){
        this._serviceName = 'UserService'
    }

    get serviceName(){
        return this._serviceName
    }

    async getAccountByUserId(userId){
        if (!validator.isUUID(userId)){
            throw new InvalidUUID(userId)
        }

        const accountDao = new AccountDao()
        return await accountDao.getAccountInfo(userId)
    }

    async addNewAccount(){
    }

    async updateAccount(){
        
    }
    
    async deleteAccount(){
        
    }
}

module.exports = { AccountService }