const { Router } = require('express')

const postingRouteV1 = (root)=>{
    const router = Router();
    root.use('/posting', router)

    router.get('/', ()=>{});
    router.post('/', ()=>{});
    router.put('/:id', ()=>{});
    router.delete('/:id', ()=>{});
}

const boardRouteV1 = (root)=>{
    postingRouteV1(root)
}
module.exports = { boardRouteV1 }