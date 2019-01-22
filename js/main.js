document.addEventListener("DOMContentLoaded", function () {
    console.log("Tinsley");
    TweenMax.staggerFrom(".hello li", 2, {
        scale: 0.1,
        opacity: 0,
        delay: 0.2,
        ease: Elastic.easeOut,
        force3D: true
    }, 0.2);

    setTimeout(function () {
        TweenMax.staggerTo(".hello li", 0, {
            scale: 1,
            opacity: 0.8,
            delay: 0.2,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.2);
    }, 2000);

    $(".title li").each(function () {
        $(this).css("color", getRandomColor);
    });
    

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        if (color === "#000000")
            getRandomColor();
        else
            return color;
    }

    setTimeout(function () {
            $('.enter').css('display', 'block').fadeIn();
        }, 2500);
        

});
