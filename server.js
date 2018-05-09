var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 3000;

var users = [];

server.listen(port, function () {
    console.log('Listening on port *' + port);
});

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));

io.sockets.on('connection', function (socket) {
    //Connected to the server
    console.log('New socket connected.');

    //Display and count users
    io.sockets.emit('users:get', users);

    //New user
    socket.on('new:member', function (data, callback) {
        if (users.indexOf(data) != -1) {
            callback(false);
        } else {
            callback(true);
            socket.username = data;
            socket.color = getRandomColor();
            users.push(socket.username);
            //Display and count users
            io.sockets.emit('users:get', users);
            //Member connected
            io.sockets.emit('member:connected', socket.username);
        }
    });

    //New message
    socket.on('new:message', function (data) {
        io.sockets.emit('new:message', {
            username: socket.username,
            color: socket.color,
            message: data
        })
    });


    //Disconnected from the server
    socket.on('disconnect', function (data) {
        console.log('Socket disconnected');
        if (!socket.username) return;
        //Remove user from the list
        users.splice(users.indexOf(socket.username), 1);
        //Display and count users
        io.sockets.emit('users:get', users);
        //Member disconnected message
        io.sockets.emit('member:disconnected', socket.username);
    });
});

function getRandomColor() {
    var RGB = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++){
        color += RGB[Math.floor(Math.random() * 16)];
    }
    return color;
}