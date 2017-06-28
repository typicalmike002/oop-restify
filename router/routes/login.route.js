const Route = require('../route').prototype;

module.exports = function (restify, server) {

    function LoginRoute() {
        Route.constructor.apply(this, arguments);
        server.get(this.path, this.getLogin);
    }
    
    LoginRoute.prototype = Object.create(Route);
    LoginRoute.prototype.constructor = LoginRoute;

    LoginRoute.prototype.getLogin = function(req, res, next) {
        res.send(200, 'Login information');
        return next();
    }

    return LoginRoute;
}
