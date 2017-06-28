const Route = require('../route').prototype;

module.exports = function(restify, instance) {

    function UserRoute() {
        Route.constructor.apply(this, arguments);
        instance.get(this.path, this.getUser);
        instance.post(this.path, this.postUser);
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