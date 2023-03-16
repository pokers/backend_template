

class DecoratorService {
    constructor(){
        this._serviceName = 'DecoratorService'
    }

    get serviceName(){
        return this._serviceName
    }

    async getTimerDecorator(userInfo, historyInfo){

        let history = new Array()
        let daily = 0

        // 오늘 날짜 계산 yyyy-mm-dd format
        const date = new Date()
        const today = date.getFullYear() + '-' + ('0'+(date.getMonth() + 1)).slice(-2) + '-' + date.getDate()

        // history array
        for (const h of historyInfo.data){

            if (!h.history_deleted_at){

                // 오늘이면 daily 계산 
                if (h.created_at.toISOString().split('T')[0] == today ){
                    daily += h.reading_time
                }
                
                history.push({"id": h.id, 
                            "date": h.created_at.toISOString().split('T')[0],
                            "time": h.reading_time})
            }
        }

        const data = {
            "user_id": userInfo.data[0].id,
            "target_time": userInfo.data[0].target_read_time,
            "daily": daily, // 오늘 모든 책을 읽은 전체 시간
            "book":{
                "book_id": historyInfo.data[0].mybook_id,
                "history": history
            }
        }

        return data
    }



}

module.exports = { DecoratorService }