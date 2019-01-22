// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    
    //page3
      var one=document.getElementById('one');
    one.addEventListener("mouseover",function(){
      one.src="../images/1950/5.jpg"
    });
    one.addEventListener("mouseout",function(){
      one.src="../images/1950/4.jpg"
    });
          var two=document.getElementById('two');
    two.addEventListener("mouseover",function(){
      two.src="../images/1950/8.jpg"
    });
    two.addEventListener("mouseout",function(){
      two.src="../images/1950/7.jpg"
    });
    var three=document.getElementById('three')
    three.addEventListener('mouseover', function() {
  three.style.opacity=.25;
});

three.addEventListener('mouseout', function() {
 three.style.opacity=1;
    //hover text
    var item=document.getElementById('three');
    item.addEventListener("mouseover", func, false);
    item.addEventListener("mouseout", func1, false);

    function func() {
        document.getElementById("text").setAttribute("style", "display:block;")
    }

    function func1() {
        document.getElementById("text").setAttribute("style", "display:none;")
    }

  
});
});
