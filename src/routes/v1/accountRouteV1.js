const Router = require('koa-router')
const userController = require('../../controllers/accountController')

const accountAPIV1 = (root)=>{
    const router = Router();

    router.get('/', userController.getMe);
    router.post('/', userController.joinMe);
    router.put('/', userController.updateMe);
    router.delete('/', userController.deleteMe);

    root.use('/account/me', router.routes())
}

const accountRouteV1 = (root)=>{
    accountAPIV1(root)
}
module.exports = { accountRouteV1 }