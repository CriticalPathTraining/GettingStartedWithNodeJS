const http = require('http'),
      
processRequest = function (request,response){
   console.log('responding to request for ' + request.url);
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('Hello world');
   response.end();
},
      
webServer = http.createServer(processRequest);

webServer.listen(3000, ()=>{
  console.log('Node server created at port 3000');
});