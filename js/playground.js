console.log("this is a js comment");



function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    noStroke()
    
}

function draw() {
    fill(255,10);
  rect(0,0,width,height);
  r= random(255);
  g= random(255);
  b= random(255);
  e= random(100);
 fill(r,g,b,e);

  ellipse(random(width), random(height), 100,100 );
  ellipse(mouseX, mouseY, 50, 50); 

    }

