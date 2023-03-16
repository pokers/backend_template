const accountDao = require('./accountDao')
const postingDao = require('./postingDao')
const timerDao = require('./timerDao')

module.exports = {
    ...accountDao,
    ...postingDao,
    ...timerDao
}