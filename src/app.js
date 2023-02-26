const express = require('express') 
const morgan = require('morgan') 
const cors = require('cors') 
const bodyParser = require('body-parser') 
const { config } = require('./config/config') 
const { initRoutes } = require('./routes') 
const compression = require('compression') 
const { log, requestLogger } = require('./utils/logging')

const app = express();

app.set('port', config.App.PORT);

const corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());

// error logging
app.use(async (ctx, next)=>{
    try{
        await next();
    }catch(e){
        const errorObject = {
            ...err,
            message: err.message,
            trace: err.stack,
        }

        ctx.status = err.status || err.statusCode || 500
        ctx.body = {
            error: errorObject,
            meta: {
                requestId: ctx.statusMessage.requestId,
                now: +new Date(),
            },
        }

        requestLogger(ctx, {
            message: err.message,
            trace: err.trace,
        })
    }
})

initRoutes(app);
log.info('Route initialized...');

app.listen(config.App.PORT, () =>{
    log.info(`Start to listen on ${config.App.PORT} ...`)
});

process.on('SIGINT', async function() {
    console.log("Caught interrupt signal");
    process.exit(0);
});

