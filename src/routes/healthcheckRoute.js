const { Router } = require('express')
const { healthcheck } = require('../controllers')

const healthcheckRouter = ()=>{
    const router = Router();
    router.use('/healthcheck', router);
    router.get('/', healthcheck);
    
    return router
}

module.exports = { healthcheckRouter }