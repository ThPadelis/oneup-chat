var express = require('express');
var socket = require('socket.io');

//App Setup
var app = express();
var port = process.env.port || 3000;
var server = app.listen(port, function () {
    console.log('Server listening on port: *' + port);
});

//Static Files
app.use(express.static('public'));

//Socket Setup
var io = socket(server);

io.on('connection', function (socket) {
    console.log('User connected with socket id:' + socket.id);

    //Handle chat event
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    //Handle user typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});