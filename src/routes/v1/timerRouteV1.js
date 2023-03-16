const Router = require('koa-router')
const timerController = require('../../controllers/timerController')

const timerAPIV1 = (root)=>{
    const router = Router();

    router.get('/:bookId', timerController.getTimer);

    root.use('/library/timer', router.routes())
}

const timerRouteV1 = (root)=>{
    timerAPIV1(root)
}
module.exports = { timerRouteV1 }