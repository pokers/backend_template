const Router = require('koa-router')
const { healthcheck, exceptionCheck } = require('../controllers')
const healthcheckRouter = ()=>{
    const router = Router();
    router.get('/', healthcheck);
    router.get('/exception', exceptionCheck);
    return router
}

module.exports = { healthcheckRouter }