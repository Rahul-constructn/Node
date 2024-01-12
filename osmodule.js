const os=require('os');
const totalmemory=os.totalmem();
const freemomory= os.freemem();
console.log(`total memory is ${totalmemory}`);
console.log(`free memory is ${freemomory}`);