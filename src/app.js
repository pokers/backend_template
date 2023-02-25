import express, { Express } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import { config } from './config/config'
import { initRoutes } from './route'
import compression from 'compression'
import { log } from './lib/logger'

import { Services } from './type'
import { serviceProvider } from './service/serviceProvider'
import { SequelizeORM } from './lib/sequelizeORM'

var memwatch = require('node-memwatch-new');

const app = express();

app.set('port', serverCfg.port);

const corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());

initRoutes(app);
log.info('Route initialized...');

app.listen(config.App.port, () =>{
    log.info("Start server...\n")
});

memwatch.on('stats', (stats)=>{
    console.log(stats);
});

process.on('SIGINT', async function() {
    console.log("Caught interrupt signal");
    process.exit(0);
});

export default app;
