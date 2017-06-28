const os = require('os');
const path = require('path');

const Router = require('./router');

function Server() {
    this.restify = require('restify');
    this.instance = this.restify.createServer({
        name: 'oop-restify',
        version: '1.0.0'
    });
    this.router = new Router(this.restify, this.instance);
    this.ipAddress = '127.0.0.1';
    this.port = 8080;
}

Server.prototype.start = function(callback) {
    this.router.requireRoutesSync(path.join(__dirname, 'router/routes'));
    this.instance.listen(this.port, this.ipAddress, callback);
}

Server.prototype.stop = function() {
    this.instance.close();
}

module.exports = Server;
