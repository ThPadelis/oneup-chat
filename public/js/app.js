$(function () {
    if ((new Date().getFullYear()) > 2018) {
        $('#copyrights').html('Copyright <client-name> &copy; 2018 - ' + (new Date().getFullYear()) + '. Created by <a href="https://www.linkedin.com/in/padelis-theodosiou/" target="_blank" class="text-dark">Theodosiou</a>');
    } else {
        $('#copyrights').html('Copyright <client-name> &copy; 2018. Created by <a href="https://www.linkedin.com/in/padelis-theodosiou/" target="_blank" class="text-dark">Theodosiou</a>');
    }
});