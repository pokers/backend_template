const healthcheckService = require('./healthcheckService')
const versionService = require('./versionService')
module.exports = {
    ...healthcheckService,
    ...versionService,
}