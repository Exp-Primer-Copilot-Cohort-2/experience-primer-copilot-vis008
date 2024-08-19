// create a web server

// 1. Load the http core module
var http = require('http');

// 2. Create a server
var server = http.createServer(function (req, res) {
    // 3. Write the response headers
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // 4. Write the response body
    res.write('Hello, world!');
    // 5. End the response
    res.end();
});

// 6. Start the server
server.listen(8000);