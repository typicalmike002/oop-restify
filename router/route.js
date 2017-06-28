function Route(name) {
    this.name = name;
    this.path = '/' + name;
}

module.exports = Route;