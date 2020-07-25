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
         $('#play').each(function () {
            $(this).attr('data-buzz', $(this).text());
        });
    });


//    mobile
       $(".hamberger").click(function() {
                $(".menu").toggleClass("menu-active");
                $(".hamberger .top").toggleClass("hamberger-top");
                $(".hamberger .center").toggleClass("hamberger-center");
                $(".hamberger .bottom").toggleClass("hamberger-bottom");
            });

});
