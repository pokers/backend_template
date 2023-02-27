const Router = require('koa-router')

const postingRouteV1 = (root)=>{
    const router = Router();

    router.get('/', ()=>{});
    router.post('/', ()=>{});
    router.put('/:id', ()=>{});
    router.delete('/:id', ()=>{});

    root.use('/posting', router.routes())
}

const boardRouteV1 = (root)=>{
    postingRouteV1(root)
}
module.exports = { boardRouteV1 }