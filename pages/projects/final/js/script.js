// JavaScript Document

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");


    $(document).ready(function () {
        setTimeout(function () {
            $('.fly-in-text').removeClass('hidden');
        }, 500);

        setTimeout(function () {
            $('.fly-in-text').delay(4000).fadeOut();
            $('.text').delay(5000).fadeIn();
            $('button').delay(6500).fadeIn();

        });
    });
    $("button").click(function () {
        $('.text').fadeOut();
        $('button').hide();
    });

});