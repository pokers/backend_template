const Router = require('koa-router')
const adminController = require('../../controllers/adminController')

const adminUserAPIV1 = (root)=>{
    const router = Router();

    router.get('/', adminController.getAccountList);
    router.put('/:id', adminController.updateAccount);
    router.delete('/:id', adminController.deleteAccount);

    root.use('/admin/user', router.routes())
}

const adminRouteV1 = (root)=>{
    adminUserAPIV1(root)
}
module.exports = { adminRouteV1 }