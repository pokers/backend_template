const { healthcheckRouter } = require('./healthcheckRoute')
const { V1 } = require('./v1')
const { V2 } = require('./v2')

const initRoutes = (app)=>{
    app.use('/healthcheck', healthcheckRouter())
    app.use('/v1', V1())
    app.use('/v2', V2())
}
module.exports = { initRoutes }