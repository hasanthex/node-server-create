const http = require('http');
const fs   = require('fs');

// Create a server and response text. 
const server = http.createServer((req, res)=>{
    res.writeHead( 200  , {'Content-Type':'text/html'}); // set status code and type as HTMl

    const my_stream = fs.createReadStream(__dirname+'/index.html', 'utf8'); // read html file data. 

    my_stream.pipe(res); // make html response using node pipe.
});

server.listen(2800, '127.0.0.1'); // set request port and request IP.

console.log('Server running on port number 2800...')
