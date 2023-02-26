const { Router } = require('express')
const { boardRouteV1 } = require('./boardRouteV1')

const V1 = ()=>{
    const router = Router()
    boardRouteV1(router)

    return router
}

module.exports = { V1 }