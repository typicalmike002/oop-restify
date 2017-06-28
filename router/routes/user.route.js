const Route = require('../route').prototype;

module.exports = function(restify, server) {

    function UserRoute() {
        Route.constructor.apply(this, arguments);
        server.get(this.path, this.getUser);
        server.post(this.path, this.postUser);
    }
    
    UserRoute.prototype = Object.create(Route);
    UserRoute.prototype.constructor = UserRoute;

    UserRoute.prototype.getUser = function(req, res, next) {
        res.send(200, 'User information');
        return next();
    }

    UserRoute.prototype.postUser = function(req, res, next) {
        res.send(200, 'Post User');
        return next();
    }

    return UserRoute;
}