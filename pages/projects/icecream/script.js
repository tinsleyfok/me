var qNumb = 0;
var question = "<h1> 😍 😍 😍 😍 😍 😍 😍 😍 😍 😍 😍 😍 😍 😍 😍 wow, you're so much better looking than any human I've seen before. I am from 2150 Sweet Sweet Kingdom, My name is Sugar. What's yours?</h1>";
var output = document.getElementById('output');
var one_yes = document.getElementById('one_yes');
var one_no = document.getElementById('one_no');
var two_yes = document.getElementById('two_yes');
var two_no = document.getElementById('two_no');
var three_yes = document.getElementById('three_yes');
var three_no = document.getElementById('three_no');
var gotit = document.getElementById('gotit');
var start = document.getElementById('start');
var discover = document.getElementById('discovery');
var customize = document.getElementById('customize');

output.innerHTML = question;

function chatBot() {
    var input = document.getElementById('name').value;
    console.log(input);

    if (qNumb == 0) {
        output.innerHTML = '<h1>Great to meet you, ' + input + '. Welcome to our time-travel booking system. </h1>';
        $(".box").css("display", "none");
        question = '<h1> You can travel to anywhere you want via our system 😊. Want to hear more about our services?</h1>';
        setTimeout(timedQuestion, 3000);
        setTimeout(function () {
            $(".choiceone").css("display", "block");
        }, 3000);
    }


    one_no.onclick = function () {
        output.innerHTML = "<h1>It's fine, if you have questions, you can always ask me during the booking experience.</h1>";
        question = '<h1>Do you want to register first before you start, ' + input + '?</h1>';
        setTimeout(timedQuestion, 5000);
        $(".choiceone").css("display", "none");
        setTimeout(function () {
            $(".choicetwo").css("display", "block");
        }, 5000);
    };


    one_yes.onclick = function () {
        $(".choiceone").css("display", "none");
        setTimeout(function () {
            $(".options").css("display", "block");
            $("#cutomize").css("display", "inline-block");
        }, 3000);

        setTimeout(function () {
            $("#discover").css("display", "inline-block");
        }, 4000);

        setTimeout(function () {
            $("#random").css("display", "inline-block");
        }, 5000);

        setTimeout(function () {
            $(".choicethree").css("display", "block");
        }, 8000);
        output.innerHTML = "<h1>Nice! We offer three different options: Customize, Discover and Random.</h1>";
        document.getElementById('input').value = "";
    };

    three_yes.onclick = function () {
        $(".options").css("display", "none");
        $(".choicethree").css("display", "none");
        output.innerHTML = "<h1>Each trip can last for from minimum 30 minutes to maximum 3 hours. </h1>";
        setTimeout(function () {
            output.innerHTML = "<h1> The price of the ticket depends on the duration of your trip and the place you travel to. </h1>";
        }, 5000);

        setTimeout(function () {
            output.innerHTML = "<h1> You are 99.9% safe. No one can see you and you can’t interact with anything. </h1>";
        }, 10000);

        setTimeout(function () {
            $(".choicefour").css("display", "block");
        }, 12000);
    };

    three_no.onclick = function () {
        $(".options").css("display", "none");
        $(".choicethree").css("display", "none");
        output.innerHTML = "<h1>It's fine, if you have questions, you can always ask me during the booking experience.</h1>";
        question = '<h1>Do you want to register first before you start, ' + input + '?</h1>';
        setTimeout(timedQuestion, 3000);
        $(".choiceone").css("display", "none");
        setTimeout(function () {
            $(".choicetwo").css("display", "block");
        }, 5000);
    };

    gotit.onclick = function () {
        $(".choicefour").css("display", "none");
        output.innerHTML = "<h1>Great! if you have questions, you can always ask me during the booking experience.</h1>";
        question = '<h1>Do you want to register first before you start, ' + input + '?</h1>';
        setTimeout(timedQuestion, 5000);
        setTimeout(function () {
            $(".choicetwo").css("display", "block");
        }, 5000);
    };

    two_yes.onclick = function () {
        $(".box").css("display", "block");
        $("#name").css("display", "none");
        $(".choicetwo").css("display", "none");
        $("#email").css("display", "block");
        output.innerHTML = '<h1>Cool! What is your email,' + input + '?</h1>';
        document.getElementById('email').value = "";
    }

    if (qNumb == 1) {
        $("#email").css("display", "none");
        $("#password").css("display", "block");
        output.innerHTML = '<h1>and your password?</h1>';
        document.getElementById('password').value = "";
    } else if (qNumb == 2) {
        $("#password").css("display", "none");
        output.innerHTML = '<h1>Congrats! ' + input + '! Your account is set. We will send you an email comfirmation shortly.</h1>';
        $("#start").css("display", "block");
    }

    start.onclick = function () {
        showMenu();
    }

    two_no.onclick = function () {
        showMenu();
    }

}




function showMenu() {
    $("#menu").css("display", "block");
    $("#chatbot").css("display", "none");
    setTimeout(function () {
        document.getElementById('customize').className = 'slideDown';
    }, 0);
    setTimeout(function () {
        document.getElementById('discovery').className = 'slideDown';
    }, 1000);
    setTimeout(function () {
        document.getElementById('randomm').className = 'slideDown';
    }, 2000);

}


discover.onclick = function () {
    $(".oops").css("display", "none");
    setTimeout(function () {
        $(".poor").css("display", "block");
    }, 0);
}


customize.onclick = function () {
    $(".poor").css("display", "none");
    setTimeout(function () {
        $(".oops").css("display", "block");
    }, 0);
    console.log(".oops".css)
}




function timedQuestion() {
    output.innerHTML = question;
}



document.getElementById('name').addEventListener('keypress', pressKey);
document.getElementById('password').addEventListener('keypress', pressKey);
document.getElementById('email').addEventListener('keypress', pressKey);

function pressKey(event) {
    if (event.which == 13) {
        chatBot();
        qNumb++
    }
}
