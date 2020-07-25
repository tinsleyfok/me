document.addEventListener("DOMContentLoaded", function () {
    console.log("Tinsley");

    
//    scroll down effect
    $(".scroll").click(function() {
    $('html,body').animate({
        scrollTop: $(".feature").offset().top},
        'slow');
});
      
    
//    navigation effect
    
    
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
