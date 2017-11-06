const livereload = require('livereload');
const connect  = require('connect');
const static = require('serve-static');

const lrserver = livereload.createServer();
const server = connect();

server.use(static(__dirname + '/'));
server.listen(3000);

lrserver.watch(__dirname + "/output");

console.log('listening on localhost:3000');
