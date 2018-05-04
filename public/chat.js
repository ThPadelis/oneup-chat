var socket = io.connect('http://localhost:3000');

//Query DOM
var message = $('#message');
var handle = $('#handle');
var send = $('#send');
var output = $('#output');
var onlineNow = $('#online-now');
var feedback = $('#feedback');


//Emmit event
send.click(function () {
    if (handle.val() == '') {
        handle.addClass('border-danger');
    } else if (handle.val !== '' && message.val() !== '') {
        handle.removeClass('border-danger');
        socket.emit('chat', {
            message: message.val(),
            handle: handle.val()
        });
        message.val('');
    }
});

message.keyup(function (e) {
    socket.emit('typing', {
        handle: handle.val()
    });

    if (e.which == 13) {
        send.click();
    }
});

//Listen for events
socket.on('chat', function (data) {
    feedback.html('');
    output.append('<p class="m-0"><strong>' + data.handle + ': </strong>' + data.message + '</p>');
});

socket.on('typing', function (data) {
    feedback.html('<p><em>' + data.handle + ' is typing a message...</em></p>');
});