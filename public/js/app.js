$(function () {
    if ((new Date().getFullYear()) > 2018) {
        $('#copyrights').html('&copy; 2018 - ' + new Date().getFullYear() + '. Developed by <a href="https://github.com/ThPadelis" target="_blank">Theodosiou</a>');
    } else {
        $('#copyrights').html('&copy; 2018. Developed by <a href="https://github.com/ThPadelis" target="_blank">Theodosiou</a>');
    }
});