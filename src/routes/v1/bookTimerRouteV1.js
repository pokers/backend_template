const Router = require('koa-router')
const bookTimerController = require('../../controllers/bookTimerController')

const bookTimerAPIV1 = (root)=>{
    const router = Router();

    router.get('/:bookId', bookTimerController.getBookTimer);
    router.post('/:bookId', bookTimerController.postReadingTime);
    router.delete('/:bookId', bookTimerController.deleteReadingTime);


    root.use('/library/timer', router.routes())
}

const bookTimerRouteV1 = (root)=>{
    bookTimerAPIV1(root)
}
module.exports = { bookTimerRouteV1 }