
import { createLogger } from './logger';

const log = (ctx, error)=>{
    const {
        state: { requestId },
        request: { url, method, body },
        response: { status, header: responseHeaders, body: responseBody },
    } = ctx

    const logEntry = {
        requestInfo: {
            method,
            url,
            header: headers,
            body,
        },
        responseInfo: {
            status,
            responseHeaders,
            responseBody: body,
        }
    }

    
}