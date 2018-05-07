var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;

var connections = [];
var users = [];

server.listen(port, function () {
    console.log('Listening on port *' + port);
});

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));

io.sockets.on('connection', function (socket) {
    connections.push(socket);
    console.log('Connected! %s sockets connected', connections.length);

    //Disconnected
    socket.on('disconnect', function () {
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();

        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected! %s sockets connected', connections.length);
    });

    //New message
    socket.on('new:message', function (data) {
        io.sockets.emit('new:message', {
            username: socket.username,
            message: data
        });
    });

    //New user
    socket.on('new:member', function(data, callback){
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });

    function updateUsernames(){
        io.sockets.emit('get:users', users);
    }
});

