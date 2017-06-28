const os = require('os');
const path = require('path');
const restify = require('restify');

const server = restify.createServer({
    name: 'oop-restify',
    version: '1.0.0'
});

const Router = require('./router')(restify, server);

function Server() {
    this.router = new Router();
    this.ipAddress = '127.0.0.1';
    this.port = 8080;
}

Server.prototype.start = function(callback) {
    this.router.requireRoutesSync(path.join(__dirname, 'router/routes'));
    server.listen(this.port, this.ipAddress, callback);
}

Server.prototype.stop = function() {
    server.close();
}

module.exports = Server;
