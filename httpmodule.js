const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>You are in home  page</h1>");
    res.end();
    }
    if(req.url=='/api/courses')
    {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>You are in courses page page</h1>");
    res.write(JSON.stringify([1,2,3]));
    res.end();
    }
})
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});