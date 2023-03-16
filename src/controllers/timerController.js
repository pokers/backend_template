const { TimerService } = require('../services')


const getTimer = async (ctx)=>{
    const {
        params: {
            bookId
        }
    } = ctx

    const inst = new TimerService()

    if(bookId){
        ctx.body = await inst.getTimerByBookId(bookId)
    }
}


module.exports = { 
    getTimer
}