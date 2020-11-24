$(function () {
    $("#registerform").progression({
        tooltipWidth: '200',
        tooltipPosition: 'right',
        tooltipOffset: '0',
        showProgressBar: false,
        showHelper: true,
        tooltipFontSize: '14',
        tooltipFontColor: 'fff',
        progressBarBackground: 'fff',
        progressBarColor: '7ea2de',
        tooltipBackgroundColor: 'a5bce5',
        tooltipPadding: '7',
        tooltipAnimate: true
    }).submit(function (e) {
        e.preventDefault();
    });

    $('#username').on('blur', function () {
        var currval = $(this).val();

        if (currval.length < 6) {
            $(this).next('.errmsg').slideDown();
        } else {
            // the username is 6 or more characters and we hide the error
            $(this).next('.errmsg').slideUp();
        }
    });

    $('#email').on('blur', function () {
        // email regex source http://stackoverflow.com/a/17968929/477958
        var mailval = $(this).val();

        var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        if (!pattern.test(mailval)) {
            $(this).next('.errmsg').slideDown();
        } else {
            $(this).next('.errmsg').slideUp();
        }
    });

    $('#password2').on('blur', function () {
        var pwone = $('#password1').val();
        var pwtwo = $(this).val();

        if (pwtwo.length < 1 || pwone != pwtwo) {
            $(this).next('.errmsg').slideDown();
        } else if (pwone == pwtwo) {
            // both passwords match and we hide the error
            $(this).next('.errmsg').slideUp();
        }
    });
});