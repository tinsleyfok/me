console.log("Tinsley!")
    $(document).ready(function () {
        $('#about').each(function () {
            $(this).attr('data-buzz', $(this).text());
        });
        $('#work').each(function () {
            $(this).attr('data-buzz', $(this).text());
        });
    });