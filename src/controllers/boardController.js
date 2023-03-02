const { PostingService } = require('../services')

const getPosting = async (ctx)=>{
    const postingService = new PostingService()
    ctx.body = {
        data: postingService.getPosingList()
    }
}

const postPosting = async (ctx)=>{
    const postingService = new PostingService()
    ctx.body = {
        data: postingService.addPosing()
    }
}

const putPosting = async (ctx)=>{
    const postingService = new PostingService()
    ctx.body = {
        data: postingService.updatePosing()
    }
}

const deletePosing = async (ctx)=>{
    const postingService = new PostingService()
    ctx.body = {
        data: postingService.deletePosing()
    }
}

module.exports = { 
    getPosting,
    postPosting,
    putPosting,
    deletePosing
}