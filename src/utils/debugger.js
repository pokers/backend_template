const log = require('./logging/logger')
const v8 = require('v8')
const fs = require('fs')

class Debugger {
    constructor(){

    }

    async getHeapStatistics(){
        try{
            const heapStatisticsStream = v8.getHeapStatistics();
            return heapStatisticsStream
        }catch(e){
            log.error(e);
            throw e;
        }
    }

    async createHeapSnapshot(){
        try{
            const heapSnapshotStream = v8.getHeapSnapshot();
            const postfix = Date.now();
            const heapFileName = `heapSnapshot_${postfix}.heapsnapshot`;
            const heapStream = fs.createWriteStream(heapFileName);
            heapSnapshotStream.pipe(heapStream);
        }catch(e){
            log.error(e);
            throw e;
        }
    }

    async createHeapDump(){
        try{
            const postfix = Date.now();
            const heapdumpFileName = `hapdump_${postfix}.heapsnapshot`;
            heapdump.writeSnapshot(heapdumpFileName);
            
        }catch(e){
            log.error(e);
            throw e;
        }
    }
}

module.exports = Debugger