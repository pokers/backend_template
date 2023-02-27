const Debugger = require('../utils/debugger')

class healthcheckService {
    constructor(){
        this._debugger = new Debugger()
    }

    async getHeapStatistics(){
        return await this._debugger.getHeapStatistics();
    }
}

module.exports = {
    healthcheckService
}