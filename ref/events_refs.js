// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.emit('my_event');
// eventEmitter.on('my_event', () => {
//   console.log('data received successfully.');
// });
const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message){
        this.emit('message',`${message} ${Date.now()}`)
    }
}

const logger = new Logger()

logger.on('message',(data)=>{
    console.log(data)
})
logger.log('hello')