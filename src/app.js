const koa = require('koa')
const koaBody = require('koa-body')
const koaCompress = require('koa-compress')
const uuid = require('uuid')

const { config } = require('./config/config') 
const { initRouter } = require('./routes') 
const { log, requestLogger } = require('./utils/logging')

const app = new koa()
app.use(koaBody.koaBody())

// Set CORS
app.use(async (ctx, next)=>{
    if(ctx.method === 'OPTIONS'){
        if (!ctx.get('Access-Control-Requrest-Method')){
            await next()
        }
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Access-Control-Allow-Credentials', 'true')
        ctx.set('Access-Control-Allow-Methods', 'GET')
        ctx.set('Access-Control-Allow-Headers', '*')
        ctx.status = 204
    }else{
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Access-Control-Allow-Credentials', 'true')
        ctx.set('Vary', 'Origin')
        await next();
    }
})

// error logging
app.use(async (ctx, next)=>{
    ctx.state.requestId = uuid.v4()
    try{
        console.log('entrypoint...')
        await next()
    }catch(err){
        const errorObject = {
            ...err,
            message: err.message,
            trace: err.stack,
        }

        ctx.status = err.status || err.statusCode || 500
        ctx.body = {
            error: errorObject,
            meta: {
                requestId: ctx.state.requestId,
                now: +new Date(),
            },
        }

        requestLogger(ctx, {
            message: err.message,
            trace: err.trace,
        })
    }
})

const router = initRouter()
app.use(router.routes())

log.info('Route initialized...');

app.listen(Number(config.App.PORT), () =>{
    log.info(` Start to listen on [${config.App.ENV} mode :${config.App.PORT}]`)
});

process.on('SIGINT', async function() {
    console.log("Caught interrupt signal");
    process.exit(0);
});

