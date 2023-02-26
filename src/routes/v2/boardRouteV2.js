const { Router } = require('express')

const postingRouteV2 = (root)=>{
    const router = Router();
    root.use('/posting', router)

    router.get('/', ()=>{});
    router.post('/', ()=>{});
    router.put('/:id', ()=>{});
    router.delete('/:id', ()=>{});
}

const boardRouteV2 = (root)=>{
    postingRouteV2(root)
}
module.exports = { boardRouteV2 }