//June 9th 2017
//Tinsley Huo 
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    $(document).ready(function () {
        $('#about').each(function () {
            $(this).attr('data-buzz', $(this).text());
        });

        $('#work').each(function () {
            $(this).attr('data-buzz', $(this).text());
        });
        $('#photo').each(function () {
            $(this).attr('data-buzz', $(this).text());
        });
        $('#contact').each(function () {
            $(this).attr('data-buzz', $(this).text());
        });
    });
    setTimeout(function () {
        $('.nav').delay(2000).fadeIn();
        $('footer').delay(2000).fadeIn();
        $('.mobilemenu').delay(2000).fadeIn();
        $('.statement').delay(300).fadeIn();
        $('.experience').delay(4000).fadeIn();
         $('.me').delay(2500).fadeIn();
          $('.contactway').delay(2000).fadeIn();
    });

    setTimeout(function () {
        $('body').css('overflow', 'scroll').fadeIn();
    }, 2200);


    TweenMax.staggerFrom(".content span", 2, {
        scale: 0.1,
        opacity: 0,
        delay: 0.2,
        ease: Elastic.easeOut,
        force3D: true
    }, 0.2);

    setTimeout(function () {
      

        TweenMax.staggerTo(".content span", 0, {
            scale: 1,
            opacity: 1,
            delay: 0.2,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.2);
    }, 2000);


});