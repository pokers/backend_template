const _ = require('lodash')
const { log } = require('./logger')

const requestLogger = (ctx, error)=>{
    const {
        state: { requestId },
        request: { url, method, body },
        response: { status, header: responseHeaders, body: responseBody },
    } = ctx

    const logEntry = {
        requestInfo: {
            method,
            url,
            header: responseHeaders,
            body,
        },
        responseInfo: {
            status,
            responseHeaders,
            responseBody: body,
        }
    }
    if(error){
        logEntry.responseInfo.responseBody = responseBody? _.cloneDeep(responseBody):{}
        logEntry.responseInfo.responseBody.error = error
    }

    const logPrint = error? log.error: log.info
    logPrint(requestId, logEntry)
}

module.exports = { requestLogger }