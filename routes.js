const http = require('http');
const fs   = require('fs');

// Create a server and response text. 
const server = http.createServer((req, res)=>{
  
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname+'/index.html', 'utf8').pipe(res);
    }
    else if(req.url === '/api/request'){
        res.writeHead( 200  , {'Content-Type':'application/json'}); // set status code and type as HTMl
        var my_obj = {
            'id'   : 001,
            'type' : 'user',
            'value': 'No value'
        };
        res.end(JSON.stringify(my_obj));        
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname+'/404.html', 'utf8').pipe(res);
    }
});

server.listen(2800, '127.0.0.1'); // set request port and request IP.

console.log('Server running on port number 2800...')
