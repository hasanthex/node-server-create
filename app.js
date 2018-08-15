const http = require('http');

console.log(http);

// Create a server and response text. 
const server = http.createServer((req, res)=>{

    console.log('Request URL : ' + req.url);  // Get request URL on Console.

    res.writeHead( 200  , {'Content-Type':'text/plain'}); // set status code and type

    res.end('Its a response text'); // set response text.
});

server.listen(2800, '127.0.0.1'); // set request port and request IP.

console.log('Server running on port number 2800...')
