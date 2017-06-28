const Server = require('./server');
const server = new Server();

server.start(function() {
    console.log('oop-server started: http://%s:%s', server.ipAddress, server.port);
});