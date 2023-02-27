const { healthcheckService, versionService } = require('../services')

const healthcheck = async (ctx, next)=>{
    const heapInfo = await(new healthcheckService()).getHeapStatistics()
    const versionInfo = (new versionService()).getVersion
    
    ctx.body = {
        version : versionInfo,
        heapInformation : heapInfo,
    }
}

const exceptionCheck = async (ctx, next)=>{
    throw new Error('Throw exception')
}

module.exports = { healthcheck, exceptionCheck }