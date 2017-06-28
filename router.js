const fs = require('fs');
const path = require('path');

module.exports = function(restify, server) {

    function Router() {
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
                this.routes[routeName] = require(filePath)(restify, server);
                let newRoute = new this.routes[routeName](routeName);
            }
        });
    }

    return Router;
}
