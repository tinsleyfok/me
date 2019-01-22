var particles_a = [];
var particles_b = [];
var particles_c = [];
var nums;
var noiseScale = 800;
var particleDensity = 2000;
//200+day/30*100
var maxLife = 10;
//6+month/2
var	simulationSpeed = 0.2;
var r=129;
var g=51;
var b=118;






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

function draw() {
    noStroke();
    smooth();
    for (var i = 0; i < nums; i++) {
        var radius = map(i, 0, nums, 1, 2);
        var alpha = map(i, 0, nums, 0, 50);
        var iterations = map(i, 0, nums, 2, 1);

        fill(248,231,28,alpha);
        particles_a[i].move(iterations);
        particles_a[i].display(radius);
        particles_a[i].checkEdge();

        fill(225,71,71,alpha);
        particles_b[i].move(iterations);
        particles_b[i].display(radius);
        particles_b[i].checkEdge();

        fill(115,193,232,alpha);
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
    
    var myVar = setInterval(myTimer, 5000);

function myTimer() {
    var d = new Date();
    document.getElementById("delay").innerHTML = d.toLocaleTimeString();
}
}