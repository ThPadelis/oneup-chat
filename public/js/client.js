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

        if (message.val() != '') {
            socket.emit('new:message', message.val());
            message.val('');
        }
    });

    //Enter username - Form
    userForm.submit(function (e) {
        e.preventDefault();

        if (user.val() != '') {
            socket.emit('new:member', user.val(), function (data) {
                if (data) {
                    userArea.hide();
                    messageArea.show();
                } else {
                    $('#usernameError').html('Username is taken...');
                }
            });
        }
        user.val('');
    });

    //Listen to events
    socket.on('new:message', function (data) {
        chat.append('<p class="mb-2"><strong>' + data.username + ':</strong> ' + data.message + '</p>');
        chat.scrollTop(chat[0].scrollHeight);
    });

    socket.on('get:users', function (data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<li class="nav-item"><a href="#" class="nav-link text-dark">' + data[i] + '</a></li>';
        }
        onlineUsers.html(html);
        onlineNow.html(data.length);
    });

    socket.on('member:connected', function (data) {
        chat.append('<p class="text-center text-muted mb-2"><em>' + data + ' connected. Say hi!</em></p>');
    });

    socket.on('member:disconnected', function (data) {
        chat.append('<p class="text-center text-muted mb-2"><em>' + data + ' disconnected...</em></p>');
    });
});