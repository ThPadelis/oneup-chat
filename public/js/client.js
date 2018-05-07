$(function () {
    var socket = io.connect();

    var messageArea = $('#messageArea');
    var messageForm = $('#messageForm');
    var message = $('#message');
    var chat = $('#chat');
    var onlineNow = $('#online-now');
    var onlineUsers = $('#online-users');

    var userArea = $('#userArea');
    var userForm = $('#userForm');
    var user = $('#username');

    //Send message - Form
    messageForm.submit(function (e) {
        e.preventDefault();

        socket.emit('new:message', message.val());
        message.val('');
    });

    //Enter username - Form
    userForm.submit(function (e) {
        e.preventDefault();

        socket.emit('new:member', user.val(), function (data) {
            if (data) {
                userArea.hide();
                messageArea.show();
            }
        });
        user.val('');
    });

    //Listen to events
    socket.on('new:message', function (data) {
        console.log(data);
        chat.append('<p class="mb-2"><strong>' + data.username + ':</strong> ' + data.message + '</p>');
    });

    socket.on('get:users', function (data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<li class="nav-item"><a href="#" class="nav-link">' + data[i] + '</a></li>';
        }
        onlineUsers.html(html);
        onlineNow.html(data.length);
    })
});