const WebSocket = require('ws');
const http = require('http');
const fs = require("fs");

http.createServer(function(request, response) {
    fs.readFile('index.html', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}).listen(3000);

const wss = new WebSocket.Server({ port: 3210 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send(JSON.stringify({ message: 's\'up bruh' }));
});
