export function Boat(length, engine){
    this.length = length;
    this.engine = engine;
}

Boat.prototype.logInfo = function(){
    console.log( this.length, this.engine);
}

// const test = 'hej hej';
// test.hello();