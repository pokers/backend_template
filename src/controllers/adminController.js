const { AdminService } = require('../services')

const getAccountList = async (ctx)=>{
    const inst = new AdminService()
    inst.getAccountList()
    ctx.body = {dummy:'getAccountList'}
}

const updateAccount = async (ctx)=>{
    const inst = new AdminService()
    inst.updateAccount()
    ctx.body = {dummy:'updateAccount'}
}

const deleteAccount = async (ctx)=>{
    const inst = new AdminService()
    inst.deleteAccount()
    ctx.body = {dummy:'deleteAccount'}
}

module.exports = { 
    getAccountList,
    updateAccount,
    deleteAccount,
}