const healthcheckService = require('./healthcheckService')
const versionService = require('./versionService')
const errorService = require('./errorService')

module.exports = {
    ...healthcheckService,
    ...versionService,
    ...errorService,
}