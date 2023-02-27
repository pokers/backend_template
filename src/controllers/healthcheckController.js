
const healthcheck = async (ctx, next)=>{
    ctx.body = {data: 'healthcheck...'}
}

const exceptionCheck = async (ctx, next)=>{
    throw new Error('Throw exception')
}

module.exports = { healthcheck, exceptionCheck }