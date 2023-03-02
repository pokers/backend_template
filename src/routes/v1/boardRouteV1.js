const Router = require('koa-router')
const postingController = require('../../controllers/boardController')

const postingRouteV1 = (root)=>{
    const router = Router();

    router.get('/', postingController.getPosting);
    router.post('/', postingController.postPosting);
    router.put('/:id', postingController.putPosting);
    router.delete('/:id', postingController.deletePosing);

    root.use('/posting', router.routes())
}

const boardRouteV1 = (root)=>{
    postingRouteV1(root)
}
module.exports = { boardRouteV1 }