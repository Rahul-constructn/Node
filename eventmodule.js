const EventEmitter=require('events');
const emitter=new EventEmitter();
// register the event
emitter.on("logging",(args)=>{
    console.log(args)
})
// raise the event
emitter.emit("logging","you are logged in");
// always write the register code before and then raising the event code