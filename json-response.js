const http = require('http');

// Create a server and response text. 
const server = http.createServer((req, res)=>{
    res.writeHead( 200  , {'Content-Type':'application/json'}); // set status code and type as HTMl
    
    var my_obj = {
        'id'   : 001,
        'type' : 'user',
        'value': 'No value'
    };

    res.end(JSON.stringify(my_obj));

});

server.listen(2800, '127.0.0.1'); // set request port and request IP.

console.log('Server running on port number 2800...')
