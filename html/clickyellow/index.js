var blue = "#3BB0B5";
var pink = "#FF92B1";
var orange = "#FB9B1B";
var green = "#296326";
var purple = "#9F5AAD";
var red = "#B32000";
var magnet = "#B40486";
var lemon = "#86B404";
var yellow = "#FED01B";

var colorArray = [
blue, pink, orange, green, red, purple, magnet, lemon
];


$(".block").each(function () {
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    $(this).css("background-color", randomColor);

});

document.getElementById('yellow').style.backgroundColor = yellow;


$(".block").mouseover(function () {
    $(this).animate({
        opacity: 0.8
    }, 200);
});

$(".block").mouseout(function () {
    $(this).animate({
        opacity: 1
    }, 200);
});



$("#yellow").attr("id", "first");
$("#first").one('click', function () {
    $("#instruction").css('display', "none");
    $(".block").each(function () {
        var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        $(this).css("background-color", randomColor);
    });
    document.getElementById('secondyellow').style.backgroundColor = yellow;
    document.getElementById('first').style.backgroundColor = red;


    $("#secondyellow").attr("id", "second");
    $("#second").one('click', function () {
        $(".block").each(function () {
            var NewNewrandomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            $(this).css("background-color", NewNewrandomColor);
        });
        document.getElementById('thirdyellow').style.backgroundColor = yellow;
        document.getElementById('second').style.backgroundColor = blue;
        $("#thirdyellow").attr("id", "third");
        $("#third").one('click', function () {
            $(".block").each(function () {
                var NewNewrandomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
                $(this).css("background-color", NewNewrandomColor);
            });
            document.getElementById('fouryellow').style.backgroundColor = yellow;
            document.getElementById('third').style.backgroundColor = purple;

            $("#fouryellow").attr("id", "four");
            $("#four").one('click', function () {
                alert("You have good eyes and a great perception of color! Now try it from a colorblind person's perspective. Find the yellow block.");
                var filterVal = 'invert(100%)';
                $(".block").each(function () {
                    var NewNewrandomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
                    $(this).css("background-color", NewNewrandomColor);
                    document.getElementById('fifthyellow').style.backgroundColor = yellow;
                    $(this).css("filter", filterVal);
                });

                $("#fifthyellow").attr("id", "five");
                $("#five").one('click', function () {
                    var filterVal = 'sepia(100%)';
                    $(".block").each(function () {
                        var NewNewrandomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
                        $(this).css("background-color", NewNewrandomColor);
                        document.getElementById('sixthyellow').style.backgroundColor = yellow;
                        $(this).css("filter", filterVal);
                    });

                    $("#sixthyellow").attr("id", "six");
                    $("#six").one('click', function () {
                        $(".block").each(function () {
                            $(this).css("display", 'none');
                        });
                        document.getElementById('colorblind').style.display = 'block';


                        setTimeout(function () {
                            $('#home').css('display', 'block').fadeIn();
                        }, 14000)
                    });
                });
            });
        });

    });
});



