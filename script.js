document.addEventListener("DOMContentLoaded", function () {
    console.log("Tinsley");

    TweenMax.staggerFrom(".welcome span", 2, {
        scale: 0.1,
        opacity: 0,
        delay: 0.2,
        ease: Elastic.easeOut,
        force3D: true
    }, 0.2);

    setTimeout(function () {
        TweenMax.staggerTo(".welcome span", 0, {
            scale: 1,
            opacity: 1,
            delay: 0.2,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.2);
    }, 2000);

    setTimeout(function () {
        $('.brief_description').css('display', 'block').fadeIn();
        $('.scroll').css('display', 'block').fadeIn();
    }, 3000);
    
//    scroll down effect
    $(".scroll").click(function() {
    $('html,body').animate({
        scrollTop: $(".feature").offset().top},
        'slow');
});
      
//    $(window).bind('scroll', function () {
//        if ($(window).scrollTop() > 200) {
//            $('.hero').fadeOut();
//        } else {
//            $('.hero').fadeIn();
//             console.log("ho");
//        }
//    });
    
    
//    navigation effect
    
        $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('.nav').show();
        } else {
            $('.nav').hide();
        }
    });
    
    $(document).ready(function () {
        $('#about').each(function () {
            $(this).attr('data-buzz', $(this).text());
        });
        $('#work').each(function () {
            $(this).attr('data-buzz', $(this).text());
        });
    });


});
