
class versionService {
    constructor(){
        this._version = 0.1
    }

    get getVersion(){
        return this._version
    }
    set setVersion(version){
        if(this._version < version){
            this._version = version
        }
    }
}

module.exports =  { versionService }