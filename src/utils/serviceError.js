const { STATUS_CODES } = require('http')

class serviceError extends Error {
    constructor(message, status, code){
        super(message)
        this.name = this.constructor.name
        this.status = STATUS_CODES(status)? Number(status):500
        this.code = code || 'EE-0001'
        this.detail = message || 'Something wrong!!!'
    }
}

module.exports = { serviceError }