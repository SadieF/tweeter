$(document).ready(function() {
    //Handles the character counter and turns red on exceeding max value

    const errorClass = 'error';
    const maxTweetLength = 140;

    $("textarea").on('input', function() {
        const charCount = maxTweetLength - $(this).val().length;
        const counter = $(this).siblings('.counter');
        counter.text(charCount);
        if (charCount < 0) {
            counter.addClass(errorClass);
        } else {
            counter.removeClass(errorClass);
        }
    });
})