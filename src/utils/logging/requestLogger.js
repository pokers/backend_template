
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

    const logPrint = error? log.error: log.info
    logPrint(requestId, logEntry)
}

module.exports = { requestLogger }