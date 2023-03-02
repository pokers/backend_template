const sinon = require('sinon')

const { PostingRepository } = require('../postingRepository')
const pgClient = require('../../connections/postgresql')

const sandbox = sinon.createSandbox()


describe('Unit Test - PostingRepository', ()=>{
    test('Initialize - should have the same name ', async ()=>{
        let exception = null;
        try{
            const inst = new PostingRepository()
            expect(inst.name).toStrictEqual('PostingRepository')
        }catch(e){
            exception = e;
        }
        expect(exception).toBeNull();
    })

    test('getPostingList - should return list ', async ()=>{
        let exception = null;
        try{
            const dummyResult = [{dummy1:'dummy1'}, {dummy2:'dummy2'}, {dummy3:'dummy3'}]

            // mocking pgClient
            sandbox
            .stub(pgClient, 'select').callsFake(()=>{
                console.log('select')
                return {
                    from: ()=>dummyResult
                }
            })
            
            // run test function
            const inst = new PostingRepository()
            const result = await inst.getPostingList()
            expect(result).toStrictEqual(dummyResult)
        }catch(e){
            exception = e;
        }
        expect(exception).toBeNull();
    })
})