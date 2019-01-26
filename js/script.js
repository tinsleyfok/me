//May 13 th 2017
//Tinsley Huo 
document.addEventListener("DOMContentLoaded", function () {
    console.log("Tinsley Huo");


    $(document).ready(function () {
        setTimeout(function () {
            $('.fly-in-text').removeClass('hidden');
        }, 500);
        
    });

 $(".fly-in-text li").each(function () {
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
        $('.fly-in-text').delay(5000).fadeOut();
        $('.nav').delay(5200).fadeIn();
        $('.mobilemenu').delay(5200).fadeIn();
    });
     
    setTimeout(function () {
        $('.contain').css('visibility', 'visible').fadeIn();
    }, 5500);
         
    setTimeout(function () {
        $('body').css('overflow', 'scroll').fadeIn();
    }, 5500)
    
     
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
    
    

    
});