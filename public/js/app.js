$(function () {

    new EmojiPicker();
    document.getElementById("messages").focus();

    if ((new Date().getFullYear()) > 2018) {
        $('#copyrights').html('&copy; 2018 - ' + new Date().getFullYear() + '. Developed by <a href="https://github.com/ThPadelis" target="_blank">Theodosiou</a>');
    } else {
        $('#copyrights').html('&copy; 2018. Developed by <a href="https://github.com/ThPadelis" target="_blank">Theodosiou</a>');
    }

    $('#directUserForm').submit(function (e) {
        e.preventDefault();

        if ($('#directMessage').val() != '') {
            $('#directChatMessages').append('<p class="my-2"><strong>User:</strong> ' + $('#directMessage').val() + '</p>');
            $('#directChatMessages').scrollTop($('#directChatMessages')[0].scrollHeight);
            $('#directMessage').val('');
        }
    });
});