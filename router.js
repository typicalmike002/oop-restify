const fs = require('fs');
const path = require('path');

function Router(restify, instance) {
    this.restify = restify;
    this.instance = instance;
    this.routes = {};
}

Router.prototype.requireRoutesSync = function(directory) {
    fs.readdirSync(directory).forEach(fileName => {
        let filePath = path.join(directory, fileName);
        let fileStat = fs.lstatSync(filePath);
        if (fileStat.isDirectory()) {
            this.requireRoutes(filePath);
        } else if (filePath.substr(filePath.indexOf('.')) === '.route.js') {
            let routeName = fileName.substr(0, fileName.indexOf('.'));
            this.routes[routeName] = require(filePath)(this.restify, this.instance);
            let newRoute = new this.routes[routeName](routeName);
        }
    });
}

module.exports = Router;
