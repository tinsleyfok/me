let video;
let poseNet;
let pose;

let width = 1380;
let height = 800;

//初始位置
let kettleX = width / 2;
let kettleY = height / 2 - 100;

var alertX = width / 2;
var alertY = height / 2
var alertOffset = 0;
var alertStaus = 0;

let noseX = 0;
let noseY = 0;
let leftEyeX = 0;
let leftEyeY = 0;

let angle, R, L;
var waterL, waterR, flower_close, flower_open, flower_ani;
var kettle_right, kettle_left, scorePic, timerPic;
//布尔值，用于状态判断
var waterBooleanL = 0;

var waterBooleanR = 0;
var flowerOpenR = 0;
var flowerOpenL = 0;
var timeCount = 0;
var startGames = 0;
var videoStatus = 0;

let button; //控制游戏开始
let restarButton;
let flowerDex;
let VideoButton;
var buttonX = width / 2 - 50;
var buttonY = height / 2 + 250;
var instruX = width / 2;
var instruY = height / 2 + 200;

//游戏得分
var scoreCount = 0;

var loadOpenL = 0;
var openTimeL = 0;
var loadOpenR = 0;
var openTimeR = 0;
var time;
var pastTime = 0;
var ts, tm;
var timeRecord = 0;
var t1, t2;
var setGameTime = 60;


function preload() {
   //加载图片
   kettle_left = loadImage('assets/kettle1.png');
   kettle_right = loadImage('assets/kettle2.png');
   waterL = loadImage('assets/waterL.gif');
   waterR = loadImage('assets/waterR.gif');
   flower_close = loadImage('assets/flower.png');
   flower_ani = loadImage('assets/flower.gif');
   flower_aniClose = loadImage('assets/flower_close.gif');
   flower_open = loadImage('assets/flower_open.png');
   scorePic = loadImage('assets/score.png');
   timerPic = loadImage('assets/timer.png');
   //加载字体
   myFont = loadFont('assets/segoeprb.ttf');
}

function setup() {

   createCanvas(width, height);

   video = createCapture(VIDEO); //创建视频捕捉
   video.hide();
   poseNet = ml5.poseNet(video, modelReady);
   poseNet.on('pose', gotPoses);

   //游戏按钮
   button = createButton('Start Game');
   button.position(buttonX, buttonY);
   button.style('background-color', '#E9C43E');
   button.style('color', '#D35A2D');
   button.style('font-size', '15px');
   button.style('text-align', 'center');
   button.style('border-radius', '100px');
   button.style('padding', '15px 32px');
   button.style('font-family', 'segoeprb');

   //视频按钮
   VideoButton = createButton('Vide Hide/Show');
   VideoButton.position(80, 0);
   VideoButton.style('background-color', '#E9C43E');
   VideoButton.style('color', '#D35A2D');
   VideoButton.style('font-size', '15px');
   VideoButton.style('text-align', 'center');
   VideoButton.style('border-radius', '100px');
   VideoButton.style('padding', '5px 16px');
   VideoButton.style('font-family', 'segoeprb');

   //重启按钮
   restarButton = createButton('re-play');

   restarButton.position(width / 2 + 10000, height / 2 + 10000);
   restarButton.style('background-color', '#E9C43E');
   restarButton.style('color', '#D35A2D');
   restarButton.style('font-size', '15px');
   restarButton.style('text-align', 'center');
   restarButton.style('border-radius', '100px');
   restarButton.style('padding', '10px 30px');
   restarButton.style('font-family', 'segoeprb');

   flowerDex = createButton('flowerDex');
   flowerDex.position(width / 2 - 10060, height / 2 + 10000);
   flowerDex.style('background-color', '#E9C43E');
   flowerDex.style('color', '#D35A2D');
   flowerDex.style('font-size', '15px');
   flowerDex.style('text-align', 'center');
   flowerDex.style('border-radius', '100px');
   flowerDex.style('padding', '10px 20px');
   flowerDex.style('font-family', 'segoeprb');

}

function modelReady() {
   console.log("model Ready");
}

function gotPoses(poses) {
   if (poses.length > 0) {
      noseX = poses[0].pose.nose.x;
      noseY = poses[0].pose.nose.y;
      leftEyeX = poses[0].pose.leftEye.x;
      leftEyeY = poses[0].pose.leftEye.y;
   }
}

function draw() {

   background('#ebd2cb');

   textAlign(CENTER);
   textFont(myFont);
   textSize(20);
   text(' Use your head to control the kettle !', instruX, instruY);

   if (videoStatus == 1) {

   } else {
      push();
      scale(1 / 2);
      translate(650, 0);
      scale(-1.0, 1.0);
      image(video, 0, 0);
      pop();
   }

   VideoButton.mouseClicked(videos);
   button.mouseClicked(start);
   restarButton.mouseClicked(reStart);
   flowerDex.mouseClicked(goTo);

   //花的位置
   var flowerPosR = createVector(1000, height * 2);
   var flowerPosL = createVector(width * 3 - 1000, height * 2);

   if (startGames == 1) {

      push();
      kettleMove();
      startGame(flowerPosR, flowerPosL);
      button.position(buttonX + width, buttonY + height);
      instruX = instruX + width;
      instruY = instruY + height;
      pop();

      //计时器 和 得分 显示
      push();
      scale(1 / 2);
      image(timerPic, width * 2 - 700, 20);
      image(scorePic, width * 2 - 350, 20);
      pop();



      if (timeRecord == 0) {
         var t = millis(); //记当前时间
         time = t - pastTime;
         ts = (time / 1000); //秒
         tm = (time % 1000); //毫秒
         t1 = parseInt(setGameTime - ts);
         t2 = parseInt(nfs(999 - tm, 2));

         //得分和倒计时数字

         textAlign(CENTER);
         textSize(30);
         fill(255, 150, 0);
         text(t1 + ':', width - 280, 45);
         text(t2, width - 220, 45);

         if (t1 == setGameTime / 2) {
            alertStaus = 0;
         }

         if (t1 <= 0) {
            timeRecord = 1;
         }



      } else if (timeRecord == 1) {

         pastTime = millis();

         startGames = 0;

         push();
         textAlign(CENTER);
         textSize(30);
         fill(255, 150, 0);
         text(0, width - 220, 45);
         pop();



      }
      text(scoreCount, width - 100, 45);

   } else {
      //初始界面
      push();
      imageMode(CENTER);
      image(kettle_left, kettleX, kettleY);
      push();
      scale(1 / 3);
      image(flower_close, flowerPosR.x, flowerPosR.y);
      image(flower_close, flowerPosL.x, flowerPosL.y);
      pop();
   }

   if (timeRecord == 1) {
     
      alert();
   }

   if (alertStaus == 1) {
      timeRecord = 0;
      startGames = 1
      alertOffset = 10000;
      restarButton.position(width / 2 + 10000, height / 2 + 10000);
      flowerDex.position(width / 2 + 10000, height / 2 + 10000);
      //  console.log(alertOffset);
   } else {
      alertOffset = 0;
   }
}


function start() {
   if (startGames == 0) {
      startGames = 1;
   } else {
      startGames = 0;
   }
}

function reStart() {
   if (alertStaus == 0) {
      alertStaus = 1;
   } else {
      alertStaus = 0;
   }
}

function goTo() {
   window.location.href = 'index1.html';
}

function videos() {
   if (videoStatus == 0) {
      videoStatus = 1;
   } else {
      videoStatus = 0;
   }
   // console.log(videoStatus);
}




function kettleMove() {
   //缩短水壶移动距离
   var kettleMoveX = map(noseX, 0, width, -width * 2, width * 3);
   // console.log(noseX,noseY);

   kettleX = kettleMoveX + 500;
   kettleY = noseY + 100;
   push();
   scale(-1, 1);

   line(width / 2, 0, width / 2, height);

   translate(kettleX, kettleY);
   strokeWeight(5);

   imageMode(CENTER);

   angle = atan2((noseY - leftEyeY), (noseX - leftEyeX));
   // console.log(angle);

   // console.log(kettleX);
   //判断水壶在左边还是右边
   if (kettleX < -width / 2) {
      //console.log("left");
      rotate(angle + PI + PI / 6);
      image(kettle_left, 0, 0);

      if (angle < 2.5) {
         scale(1 / 4);
         image(waterR, -450, 150);
         waterBooleanR = 1;
      } else {
         waterBooleanR = 0;

      }
   } else {
      rotate(angle + PI + PI / 6);
      image(kettle_right, 0, 0);

      if (angle > 2.8) {
         scale(1 / 4);
         image(waterL, 450, 150);
         waterBooleanL = 1;
      } else {
         waterBooleanL = 0;
      }
   }
   pop();
}

function alert() {
   //弹窗
   push();
   fill(255, 150, 0);
   noStroke();
   rectMode(CENTER);
   rect(alertX + alertOffset, alertY + alertOffset, 600, 400, 5);

   restarButton.position(width / 2 + 50, height / 2 + 100);
   flowerDex.position(width / 2 - 160, height / 2 + 100);

   //文字
   fill(0);
   textSize(20);
   textAlign(CENTER);
   text("Congrats! you got", alertX + alertOffset - 150, alertY + alertOffset - 150);
   text("flower points", alertX + alertOffset + 120, alertY + alertOffset - 150);
   textSize(30);
   fill('#cf6d95');
   text(scoreCount, alertX + alertOffset + 20, alertY + alertOffset - 145);

   push();
   scale(1 / 2);
   image(scorePic, alertX + alertOffset + 650, alertY + alertOffset + 90);
   pop();

   push();
   scale(1 / 6);
   image(flower_ani, alertX + alertOffset + 3400, alertY + alertOffset + 1800);
   pop();
   pop();

}



function startGame(R, L) {
   scale(1 / 3);
   var leftX = R.x - 1115;
   var rightY = R.y - 940;
   var rightX = L.x - 1115;
   var leftY = L.y - 940;


   image(flower_close, rightX, rightY);
   image(flower_close, leftX, leftY);

   distLeft = dist(leftX, leftY, kettleX, kettleY);
   distRight = dist(kettleX, kettleY, rightX, rightY);
   //console.log(waterBooleanL, distLeft, distRight);
   if (waterBooleanR == 1 && distRight > 2900) {
      image(flower_ani, rightX, rightY);
      timeCount++;
   }
   if (flowerOpenR == 0 && timeCount > 50) {
      flowerOpenR = 1;
      timeCount = 0;
   }
   //image(flower_aniClose,rightX,rightY);R
   R

   if (waterBooleanL == 1 && distLeft < 500) {
      image(flower_ani, leftX, leftY);
      timeCount++;
      //  console.log(timeCount)R;
   }
   if (flowerOpenL == 0 && timeCount > 50) {
      timeCount = 0;
      flowerOpenL = 1;
   }
   //  

   if (flowerOpenR == 1) {
      scoreCount++;
      flowerOpenR = 0;
      loadOpenR = 1;
   }
   if (flowerOpenL == 1) {
      scoreCount++;
      flowerOpenL = 0;
      loadOpenL = 1;
   }

   if (loadOpenR == 1) {
      image(flower_open, rightX, rightY);
      openTimeR++;
   } else if (loadOpenR == 0) {

   }

   if (openTimeR > 80) {
      openTimeR = 0;
      loadOpenR = 0;
      image(flower_aniClose, rightX, rightY);
   }


   if (loadOpenL == 1) {
      image(flower_open, leftX, leftY);
      L
      openTimeL++;
      L
   } else if (loadOpenL == 0) {

   }

   if (openTimeL > 80) {
      openTimeL = 0;
      loadOpenL = 0;
      image(flower_aniClose, leftX, leftY);
   }
}