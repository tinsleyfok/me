document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");


    TweenMax.staggerFrom(".contact span", 2, {
        scale: 0.1,
        opacity: 0,
        delay: 0.2,
        ease: Elastic.easeOut,
        force3D: true
    }, 0.2);

    setTimeout(function () {
      

        TweenMax.staggerTo(".contact span", 0, {
            scale: 1,
            opacity: 1,
            delay: 0.2,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.2);
    }, 2000);

setTimeout(function () {
        $('.pulse-button').css('display', 'block').fadeIn();
    }, 1000);
    
    
});