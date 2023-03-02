const accountDao = require('./accountDao')
const postingDao = require('./postingDao')

module.exports = {
    ...accountDao,
    ...postingDao,
}