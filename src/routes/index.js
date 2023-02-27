const Router = require('koa-router')
const { healthcheckRouter } = require('./healthcheckRoute')
const { V1 } = require('./v1')
const { V2 } = require('./v2')

const initRouter = ()=>{
    const router = new Router()
    router.use('/healthcheck', healthcheckRouter().routes())
    router.use('/v1', V1().routes())
    router.use('/v2', V2().routes())

    return router
}
module.exports = { initRouter }