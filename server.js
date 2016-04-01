var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();

server.register(require('inert'), function (err) {
  if (err) {
    throw err;
  }
});


server.connection({
  port: 3000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public')
    }
  }
});

server.route({
  method: 'GET',
  path: '/components/{param*}',
  handler: {
    directory: {
      path: 'bower_components'
    }
  }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.register({ register: require('speax') }, {
    routes: {
        prefix: '/discourses'
    }
}, function (err) {
});

server.register({ register: require('collabox') }, {
    routes: {
        prefix: '/collabox'
    }
}, function (err) {
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});
