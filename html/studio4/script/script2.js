// JavaScript Document

document.addEventListener("DOMContentLoaded", function () {
console.log("DOM fully loaded and parsed");

var chanel = document.getElementById('chanel')
chanel.addEventListener('mouseover', function () {
    chanel.style.opacity = .25;
});

chanel.addEventListener('mouseout', function () {
    chanel.style.opacity = 1;
});

var coco = document.getElementById('coco')
coco.addEventListener('mouseover', function () {
    coco.style.opacity = .25;
});

coco.addEventListener('mouseout', function () {
    coco.style.opacity = 1;
});

var yellow = document.getElementById('yellow')
yellow.addEventListener('mouseover', function () {
    yellow.style.opacity = .25;
});

yellow.addEventListener('mouseout', function () {
    yellow.style.opacity = 1;
});

var black = document.getElementById('black')
black.addEventListener('mouseover', function () {
    black.style.opacity = .25;
});

black.addEventListener('mouseout', function () {
    black.style.opacity = 1;
});



    //hover text
    var item=document.getElementById('chanel');
    item.addEventListener("mouseover", func, false);
    item.addEventListener("mouseout", func1, false);

    function func() {
        document.getElementById("chaneltext").setAttribute("style", "display:block;")
    }

    function func1() {
        document.getElementById("chaneltext").setAttribute("style", "display:none;")
    }

  
});
