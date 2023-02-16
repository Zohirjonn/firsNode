const url = 'https://192.168.7.1/logger'

const EventEmitter =  require('events');
// const emitter = new EventEmitter();

class logger extends EventEmitter {
     log(massage){
        console.log(massage)
    
        this.emit('MassageLogged', {id:1, url:'https://....'})
    }
}


module.exports = logger;