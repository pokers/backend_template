const { serviceError } = require('../utils/serviceError')

const errCodeString = {
    MissingParameter    : 'ERR-0001',
    InvalidParameter    : 'ERR-0002',
    InvalidUUID         : 'ERR-0003',
    UserNotFound        : 'ERR-0004',
}

class MissingRequestPatameter extends serviceError {
    constructor(paramName){
        const message = `${paramName} is required`
        super(message, 400, errCodeString.MissingParameter)
        this.name = this.constructor.name
    }
}

class InvalidRequestParameter extends serviceError {
    constructor(paramName){
        const message = `Parameter is not valid : ${paramName}`
        super(message, 400, errCodeString.InvalidParameter)
        this.name = this.constructor.name
    }
}

class InvalidUUID extends serviceError {
    constructor(uuid){
        const message = `invalid UUID format : ${uuid}`
        super(message, 400, errCodeString.InvalidUUID)
        this.name = this.constructor.name
    }
}


class AccountNotFound extends serviceError {
    constructor(userId){
        const message = `Can not find acount ${userId}`
        super(message, 400, errCodeString.InvalidUUID)
        this.name = this.constructor.name
    }
}

module.exports = {
    MissingRequestPatameter,
    InvalidRequestParameter,
    InvalidUUID,
    AccountNotFound
}