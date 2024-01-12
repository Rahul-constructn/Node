var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.write("<h1> Rahul Samalla<h1>");
//   res.write(req.url);
//   res.end();
// }).listen(8080);
const server=http.createServer((req,res)=>{
    res.write("<h1>Hey hello<h1>");
    })
    
server.listen(4911,"localhost",()=>{
    console.log("server is listening to port 4911");
})    