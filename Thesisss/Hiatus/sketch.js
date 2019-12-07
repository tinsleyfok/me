/*==============================================================================
*   Tinsley Huo
*   MFA Design & Technology, Parsons School of Design. Dec 2019.
===============================================================================*/



let video;
let PoseNet;
let noseX = 0;
let noseY = 0;
let eye1X, eye1Y, eye2X, eye2Y;
let ear1X, ear1Y, ear2X, ear2Y;



var imagesArray = ["assets/up.gif", "assets/down.gif", "assets/left.gif", "assets/right.gif"];

function displayImage() {
    var num = Math.floor(Math.random() * 4);
    document.canvas.src = imagesArray[num];
}

console.log(num);

//function setup() {
//    var canvas = createCanvas(640, 480);
//    canvas.parent('magicCanvas');
//    video = createCapture(VIDEO);
//    video.hide();
//    poseNet = ml5.poseNet(video, modelReady);
//    poseNet.on('pose', gotPoses);
//    poseNet.on('pose', detectPoses);
//}
//
//function modelReady() {
//    console.log("model Ready");
//}
//
//function gotPoses(poses) {
//    if (poses.length > 0) {
//        noseX = poses[0].pose.keypoints[0].position.x;
//        noseY = poses[0].pose.keypoints[0].position.y;
//
//        eye1X = poses[0].pose.keypoints[1].position.x;
//        eye1Y = poses[0].pose.keypoints[1].position.y;
//
//        eye2X = poses[0].pose.keypoints[2].position.x;
//        eye2Y = poses[0].pose.keypoints[2].position.y;
//
//        ear1X = poses[0].pose.keypoints[3].position.x;
//        ear1Y = poses[0].pose.keypoints[3].position.y;
//
//        ear2X = poses[0].pose.keypoints[4].position.x;
//        ear2Y = poses[0].pose.keypoints[4].position.y;
//
////        console.log(noseY);
//    }
//
//}
//
//function detectPoses(poses) {
//    if (noseX > 300) {
//        document.getElementById("result").innerHTML = "Result: Left";
//    } else if (noseX < 250) {
//        document.getElementById("result").innerHTML = "Result: Right";
//    } else if (noseY > 380) {
//        document.getElementById("result").innerHTML = "Result: Down";
//    } else if (noseY < 250) {
//        document.getElementById("result").innerHTML = "Result: Up";
//    } else {
//        document.getElementById("result").innerHTML = "Result: Normal";
//    }
//}
//
//
//function draw() {
//    background(211, 234, 250);
//    translate(width, 0);
//    scale(-1.0, 1.0);
//    image(video, 0, 0);
//    fill(255, 0, 0);
//    ellipse(noseX, noseY, 50);
//    eye(eye1X, eye1Y, 80, 1);
//    eye(eye2X, eye2Y, 80, -1);
//    fill(200, 200, 0);
//    arc(noseX, noseY + 50, 80, 80, 0, PI, OPEN);
//}
//
//function eye(x, y, size, n) {
//    let angle = frameCount * 0.2;
//
//    fill(255);
//    noStroke();
//    ellipse(x, y, size, size);
//
//    fill(56);
//    noStroke();
//    ellipse(x + cos(angle * n) * size / 5, y + sin(angle * n) * size / 5, size / 2, size / 2);
//}
//
//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//}
