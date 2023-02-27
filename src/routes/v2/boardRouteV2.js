const Router = require('koa-router')

const postingRouteV2 = (root)=>{
    const router = Router();

    router.get('/', ()=>{});
    router.post('/', ()=>{});
    router.put('/:id', ()=>{});
    router.delete('/:id', ()=>{});

    root.use('/posting', router.routes())
}

const boardRouteV2 = (root)=>{
    postingRouteV2(root)
}
module.exports = { boardRouteV2 }