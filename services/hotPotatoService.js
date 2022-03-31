const Queue = require('../models/queue');

class HotPotatoService{
    static getPotatoResult(playersList, numberToEliminate){
        const queueOfPlayers = this.getQueueOfPlayers(playersList); 
        const eliminatedList = [];

        while(queueOfPlayers.size() > 1){
            
            for(let i = 0; i < numberToEliminate; i++){
                queueOfPlayers.enqueue(queueOfPlayers.dequeue());
            }
            eliminatedList.push(queueOfPlayers.dequeue());
        }

        return{
            winner: queueOfPlayers.dequeue(),
            eliminates: eliminatedList
        }

    }

    static getQueueOfPlayers(playersList){
        const queue = new Queue();
        
        for (let i = 0; i < playersList.length; i++){
            queue.enqueue(playersList[i]);
        }        

        return queue;
    }
}

module.exports = HotPotatoService;