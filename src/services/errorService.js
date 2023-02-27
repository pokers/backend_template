const { serviceError } = require('../utils/serviceError')

const errCodeString = {
    MissingParameter : 'ERR=0001',
}

class MissingRequestPatameter extends serviceError {
    constructor(paramName){
        const message = `${paramName} is required`
        super(message, 400, errCodeString.MissingParameter)
        this.name = this.constructor.name
    }
}

module.exports = {
    MissingRequestPatameter
}