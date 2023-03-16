const healthcheckService = require('./healthcheckService')
const versionService = require('./versionService')
const errorService = require('./errorService')
const postingService = require('./postingService')
const accountService = require('./accountService')
const adminService = require('./adminService')
const timerService = require('./timerService')
const DecoratorService = require('./decoratorService')

module.exports = {
    ...healthcheckService,
    ...versionService,
    ...errorService,
    ...postingService,
    ...accountService,
    ...adminService,
    ...timerService,
    ...DecoratorService
}