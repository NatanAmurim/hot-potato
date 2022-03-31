class Queue{
    constructor(){
        this.items = {};
        this.numberOfElements = 0;
        this.lowestElement = 0;
    }

    enqueue(element){
        this.items[this.numberOfElements] = element;
        this.numberOfElements++;
    }

    dequeue(){
        if (this.isEmpty())
            return undefined;
        
        const result = this.items[this.lowestElement];
        delete this.items[this.lowestElement];
        this.lowestElement++;
        return result;
    }

    peek(){
        if (this.isEmpty())
            return undefined;
        return this.items[this.lowestElement];
    }

    isEmpty(){
        return  this.size() === 0;
    }

    size(){
        return this.numberOfElements - this.lowestElement;
    }

    clear(){
        this.items = {};
        this.numberOfElements = 0;
        this.lowestElement = 0;
    }

    toString(){
        if (this.isEmpty())
            return '';
        
        let objString = `${this.items[this.lowestElement]}`;

        for(let i = this.lowestElement + 1; i < this.numberOfElements; i++){
            objString += `, ${this.items[i]}`;
        }

        return objString;
    }

}

module.exports = Queue;