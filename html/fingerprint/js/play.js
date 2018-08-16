var particles_a = [];
var particles_b = [];
var particles_c = [];
var nums;
var noiseScale = 800;
var particleDensity = 500;
//200+day/30*100
var maxLife = 10;
//6+month/2
var	simulationSpeed = 0.2;

var color;
var rColor=229;
var gColor=51;
var bColor=68;

document.querySelector("input").addEventListener("input", function(e) {
  changeColor();
    
});

document.querySelector("form").addEventListener("submit", function(e) {
   
    e.preventDefault();
    readForm();
});






function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    nums = windowWidth * windowHeight / particleDensity;
    for (var i = 0; i < nums; i++) {
        particles_a[i] = new Particle(100,100);
        particles_b[i] = new Particle(100,100);
        particles_c[i] = new Particle(100,100);
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    
    
}

function changeColor(){
    color=document.querySelector("input").value;
    rColor = (hexToRgb(color).r);
    gColor = (hexToRgb(color).g);
    bColor = (hexToRgb(color).b);
    setup();
    draw();
    
}

function readForm(){
    changeColor();
    var month = document.querySelectorAll("input[type=number]")[0].value;
    console.log(month);
    
     var day = document.querySelectorAll("input[type=number]")[1].value;
    
  maxLife=month;
  particleDensity=200+day*10;
    setup();
    draw();
}



function draw() {
    noStroke();
    smooth();
    for (var i = 0; i < nums; i++) {
        var radius = map(i, 0, nums, 1, 2);
        var alpha = map(i, 0, nums, 0, 50);
        var iterations = map(i, 0, nums, 2, 1);

     
        fill(rColor,gColor,bColor,alpha);
        particles_a[i].move(iterations);
        particles_a[i].display(radius);
        particles_a[i].checkEdge();

        fill(rColor+10,gColor+50,bColor+30,alpha);
        particles_b[i].move(iterations);
        particles_b[i].display(radius);
        particles_b[i].checkEdge();

        fill(rColor+20,gColor-50,bColor+20,alpha);
        particles_c[i].move(iterations);
        particles_c[i].display(radius);
        particles_c[i].checkEdge();
    }
}


function Particle(x, y) {
    this.vel = createVector(0, 0);
    this.pos = createVector(random(0, width), random(0, height));
    this.life = random(0, maxLife);
    this.flip = int(0, 2) * 2 - 1;
    
    this.move = function (iterations) {
        if ((this.life -= 0.02) < 0)
            this.respawn();
        while (iterations > 0) {
            var angle = noise(this.pos.x / noiseScale, this.pos.y / noiseScale) * TWO_PI * noiseScale * this.flip;
            this.vel.x = cos(angle);
            this.vel.y = sin(angle);
            this.vel.mult(simulationSpeed);
            this.pos.add(this.vel);
            --iterations;
        }
    }

    this.checkEdge = function () {
        if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
            this.respawn();
        }
    }

    this.respawn = function () {
        this.pos.x = (0, 0);
        this.pos.y = (0, 0);
        this.life = maxLife;
    }


    this.display = function (r) {
        
        ellipse(this.pos.x, this.pos.y, r, r);
    }
    
   
}