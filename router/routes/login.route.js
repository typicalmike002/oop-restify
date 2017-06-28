const Route = require('../route').prototype;

module.exports = function (restify, instance) {

    function LoginRoute() {
        Route.constructor.apply(this, arguments);
        instance.get(this.path, this.getLogin);
    }
    
    LoginRoute.prototype = Object.create(Route);
    LoginRoute.prototype.constructor = LoginRoute;

    LoginRoute.prototype.getLogin = function(req, res, next) {
        res.send(200, 'Login information');
        return next();
    }

    return LoginRoute;
}
