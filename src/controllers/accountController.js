const { AccountService } = require('../services')

const getMe = async (ctx)=>{
    const {
        headers: {
            userid
        }
    } = ctx

    const inst = new AccountService()
    if(userid){
        ctx.body = await inst.getAccountByUserId(userid)
    }
}

const joinMe = async (ctx)=>{
    const {
        query,
        headers,
        request: { body }
    } = ctx
    const inst = new AccountService()
    inst.addNewAccount()
    ctx.body = {dummy:'joinMe'}
}

const updateMe = async (ctx)=>{
    const inst = new AccountService()
    inst.updateAccount()
    ctx.body = {dummy:'updateMe'}
}

const deleteMe = async (ctx)=>{
    const inst = new AccountService()
    inst.deleteAccount()
    ctx.body = {dummy:'deleteMe'}
}

module.exports = { 
    getMe,
    joinMe,
    updateMe,
    deleteMe
}