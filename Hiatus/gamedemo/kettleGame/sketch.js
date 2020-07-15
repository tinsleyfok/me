//视频
let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let leftEyeX = 0;
let leftEyeY = 0;

//dom元素
let warmUpButton, gameButton, restarButton, quitButton, VideoButton; //按键
let kettle_left, kettle_right, flowerOpen, flowerL, flowerR, waterDrop; //水壶和花朵
let musicImg, clockImg, scoreImg, scoreImg2, muteImg; //图标
let scoreSound, clockSound, backSound; //音效
let alertPanel; //弹窗
let clockP, scoreP, Countdown1, Countdown2; //计时和得分

// //warm-up
// let p1, p2, p3, h1, character1, character2;

//初始位置
var alertX, alertY, kettleX, kettleY;
var ploc; //提示句子的位置

//水壶角度 花朵位置
let angle, R, L;

//布尔值，用于状态判断

var waterBooleanL = 0;
var waterBooleanR = 0;
var flowerOpenR = 0;
var flowerOpenL = 0;
// var timeRecord = 1;
var reStart = 0;
var startGames = 0;
var videoStatus = 0;
var music = 0;
var warmUp = 0;
var startClock = 0;
var quit = 0;

//游戏计时
var timeCount = 0;
var scoreCount = 0;

// var time;
var pastTime = 0;
var ts, tm;
// var t1, t0;
// var Ptime;



function preload() {
   //加载图片
   kettle_left = loadImage('new_assets/kettle-left.svg');
   kettle_right = loadImage('new_assets/kettle-right.svg');
   waterDrop = loadImage('new_assets/waterdrop.svg');
}

function setup() {

   createCanvas(windowWidth, windowHeight);
   imageMode(CENTER); //图像模式居中
   video = createCapture(VIDEO); //创建视频捕捉
   video.hide();

   //视频检测
   poseNet = ml5.poseNet(video, modelReady);
   poseNet.on('pose', gotPoses);

   textAlign(CENTER);


   //加载游戏场景
   kettle_left = createImg('new_assets/kettle-left.svg');
   kettle_left.position(width / 2 - 150, height / 2 - 300);
   kettle_right = createImg('new_assets/kettle-right.svg');
   flowerOpenL = createImg('new_assets/flower.gif');
   flowerOpenR = createImg('new_assets/flower.gif');
   flowerL = createImg('new_assets/flowerX.png');
   flowerR = createImg('new_assets/flowerX.png');
   //隐藏素材
   kettle_left.hide();
   kettle_right.hide();
   flowerOpenL.hide();
   flowerOpenR.hide();


   //音效
   scoreSound = createAudio('new_assets/right.mp3');
   clockSound = createAudio('new_assets/Countdown 5 Seconds HD.mp3');
   backSound = createAudio('new_assets/background music.mp3');

   //面板
   alertPanel = createDiv('').size(700, 400);
   alertPanel.center();
   alertPanel.style('background', '#ffcd7e');
   alertPanel.style('border-radius', '10px');
   alertPanel.hide();

   //音乐 & 得分 & 计时 图标
   musicImg = createImg('new_assets/music.svg');
   muteImg = createImg('new_assets/mute.svg');
   scoreImg = createImg('new_assets/flower.svg');
   scoreImg2 = createImg('new_assets/flower.svg');
   scoreImg2.position(width / 2 - 15, height / 2 - 23);
   clockImg = createImg('new_assets/clock.svg');
   musicImg.position(width - 150, 25);
   muteImg.position(width - 155, 22);
   scoreImg.position(width - 250, 22);
   clockImg.position(width - 400, 18);
   scoreImg2.hide();
   clockP = createP('2:00');
   clockP.position(width - 335, -8);
   clockP.style('font-size', '30px');
   scoreP = createP('0');
   scoreP.position(width - 195, -8);
   scoreP.style('font-size', '30px');
   Countdown1 = createP('');
   Countdown1.hide();
   Countdown1.center();
   Countdown1.style('font-size', '40px');
   Countdown1.style('color', '#5c30f8');
   Countdown2 = createP('');
   Countdown2.hide();
   Countdown2.center();
   Countdown2.style('font-size', '40px');
   Countdown2.style('color', '#5c30f8');

   //热身素材
   character1 = createImg('new_assets/character.svg');
   character2 = createImg('new_assets/character.svg');
   p1 = createP(' Use your head to control the kettle !');
   p2 = createP(': Congrats! you got');
   p3 = createP('flower points!');
   h1 = createElement('h1', '');
   character1.hide();
   character2.hide();
   p1.hide();
   p2.hide();
   p3.hide();
   h1.hide();

   //游戏热身
   warmUpButton = createButton('Start');
   warmUpButton.position(width / 2 - 80, height / 2 + 200);
   warmUpButton.style('background-color', '#F8CE89');
   warmUpButton.style('color', '#D35A2D');
   warmUpButton.style('font-size', '15px');
   warmUpButton.style('text-align', 'center');
   warmUpButton.style('border-radius', '100px');
   warmUpButton.style('border', 'none');
   warmUpButton.style('box-shadow', '0 4px 4px 0 rgba(0,0,0,0.2)')
   warmUpButton.style('padding', '10px 50px');
   warmUpButton.style('outline', 'none');
   ploc = createVector(width / 2 - 100, height / 2 + 150);
   //游戏按钮
   gameButton = createButton('Start Game');
   gameButton.hide();
   gameButton.style('background-color', '#F8CE89');
   gameButton.style('color', '#D35A2D');
   gameButton.style('font-size', '15px');
   gameButton.style('text-align', 'center');
   gameButton.style('border-radius', '100px');
   gameButton.style('border', 'none');
   gameButton.style('box-shadow', '0 4px 4px 0 rgba(0,0,0,0.2)')
   gameButton.style('padding', '10px 50px');
   gameButton.style('outline', 'none');

   //视频按钮
   VideoButton = createButton('Video Hide/Show');
   VideoButton.position(80, 0);
   VideoButton.style('background-color', '#F8CE89');
   VideoButton.style('color', '#D35A2D');
   VideoButton.style('font-size', '15px');
   VideoButton.style('text-align', 'center');
   VideoButton.style('border-radius', '100px');
   VideoButton.style('border', 'none');
   VideoButton.style('box-shadow', '0 4px 4px 0 rgba(0,0,0,0.2)')
   VideoButton.style('padding', '10px 50px');
   VideoButton.style('outline', 'none');

   //重启按钮
   restarButton = createButton('Replay');
   restarButton.hide();
   restarButton.style('background-color', '#ee6521');
   restarButton.style('font-size', '15px');
   restarButton.style('text-align', 'center');
   restarButton.style('border-radius', '100px');
   restarButton.style('border', 'none');
   restarButton.style('padding', '10px 64px');
   restarButton.style('outline', 'none');

   quitButton = createButton('Quit');
   quitButton.hide();
   quitButton.style('background-color', '#ad8eff');
   quitButton.style('font-size', '15px');
   quitButton.style('text-align', 'center');
   quitButton.style('border-radius', '100px');
   quitButton.style('border', 'none');
   quitButton.style('padding', '10px 75px');
   quitButton.style('outline', 'none');

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

let time2, Ptime2, t3;

function draw() {

   background('#efecff');
   // alert();

   //花的位置
   var flowerPosL = createVector(150, height / 2);
   var flowerPosR = createVector(width - 450, height / 2);
   flowerR.position(flowerPosR.x, flowerPosR.y);
   flowerR.style('width', '300px');
   flowerL.position(flowerPosL.x, flowerPosL.y);
   flowerL.style('width', '300px');

   //计时器 & 得分 & 音乐
   musicImg.mouseClicked(musicMute);
   muteImg.mouseClicked(musicMute);

   //按键事件
   VideoButton.mouseClicked(videos);
   warmUpButton.mouseClicked(warmUpStart);
   restarButton.mouseClicked(reStartGame);
   quitButton.mouseClicked(quitGame);

   //视频窗口显示控制//////////////
   if (videoStatus == 1) {} else {
      push();
      scale(-1 / 2, 1 / 2);
      image(video, -320, 230);
      pop();
   }

   //游戏热身阶段/////////////////
   // if (warmUp == 1) {

   //    kettleMove();
   //    waterFlowers(flowerPosR, flowerPosL);
   //    warmUpRight();

   //    //画面素材
   //    p1.position(ploc.x, ploc.y);
   //    p1.show();
   //    character1.position(ploc.x - 50, ploc.y);
   //    character1.show();
   //    character1.style('width', '40px');
   //    warmUpButton.hide();
   //    kettle_left.hide();

   //    let time1 = millis();
   //    p1.html('Use your head to control the kettle');
   //    if (time1 > 5000) {
   //       p1.html('Great! Now water the flowers!');
   //    }

   //    if (waterBooleanR == 1 && distRight < 300 || waterBooleanL == 1 && distLeft < 600) {
   //       p1.html('Awesome! Hold this position for 5 second!');
   //       clockSound.play();
   //    } else {
   //       clockSound.stop();
   //    }

   //    if (timeCount1 >= 5 || timeCount2 >= 5) {
   //       p1.html('You did a great job! Now, slowly return back straight ahead!');
   //       p1.position(ploc.x - 100, ploc.y);
   //       character1.position(ploc.x - 150, ploc.y);
   //       startClock = 1;
   //    }

   //    if (startClock == 1) {
   //       time2 = millis();
   //       t3 = time2 - Ptime2;
   //    } else {
   //       Ptime2 = millis();
   //    }

   //    if (t3 > 5000) {
   //       p1.html('you are ready now! Click start and enjoy the game!');
   //       gameButton.position(width / 2 - 80, height / 2 + 200);
   //       gameButton.show();
   //       gameButton.mouseClicked(start);
   //    }
   //    console.log(t3);

   // } else if (warmUp == 0) {
   //    kettle_left.show();
   // }

   //进入游戏//////////////////////
   if (warmUp == 1) {

      //隐藏画面内容
      // warmUp = 0;
      clockSound.stop();
      kettle_left.hide();
      character1.hide();
      warmUpButton.hide();
      p1.hide();

      kettleMove(); //移动水壶
      waterFlowers(flowerPosR, flowerPosL); //浇花反馈
      gameRight(); //游戏得分反馈

      //开始计时
      let t = millis(); //记当前时间
      let time = t - pastTime;
      ts = 59 - floor(time / 1000); //秒
      tm = floor(map(ts, 60, 1, 2, 1));
      while (ts <= 0) {
         ts = ts + 59;
      }
      clockP.html(tm + ':' + ts);

      if (tm < 0) {
         alert();
         startGames = 0;
         flowerOpenR.hide();
         flowerOpenL.hide();
         flowerR.show();
         flowerL.show();
         Countdown1.hide();
         Countdown2.hide();
      }
      //切换音乐按钮 控制音乐开关
      if (music == 1) {
         musicImg.hide();
         muteImg.show();
         backSound.stop();
      } else {
         muteImg.hide();
         musicImg.show();
         backSound.play();
      }
      //console.log(scoreCount);
   } else if (startGames == 0) {
      pastTime = millis(); //记录程序运行到点击开始之前经过的时间
      backSound.stop();
      clockP.html('2:00');
      scoreP.html('0');
      //console.log('stop');
   }


   // console.log(scoreCount)
   if (reStart == 1) {
      startGames = 1;

      alertPanel.hide();
      restarButton.hide();
      quitButton.hide();
      character2.hide();
      scoreImg2.hide();
      p2.hide();
      p3.hide();
      h1.hide();
      reStart = 0;
   }

   if (quit == 1) {
      startGames = 0;

      alertPanel.hide();
      restarButton.hide();
      quitButton.hide();
      warmUpButton.hide();
      character2.hide();
      scoreImg2.hide();
      p2.hide();
      p3.hide();
      h1.hide();
      quit = 0;

   }
   // console.log(startGames);
}

/////////////////////---布尔函数---////////////////////////////////////////////////////////////////
function start() {
   if (startGames == 0) {
      startGames = 1;
   } else {
      startGames = 0;
   }
}

function quitGame() {
   if (quit == 0) {
      quit = 1;
   } else {
      quit = 0;
   }
}

function reStartGame() {
   if (reStart == 0) {
      reStart = 1;
   } else {
      reStart = 0;
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
}

function musicMute() {
   if (music == 0) {
      music = 1;
   } else {
      music = 0;
   }
}

function warmUpStart() {
   if (warmUp == 0) {
      warmUp = 1;
   } else {
      warmUp = 0;
   }
}

////////////////////////---水壶函数---////////////////////////////////////////////////////////////

function kettleMove() {
   //缩短水壶移动距离
   var kettleMoveX = map(noseX, 600, 0, 0, width);
   kettleX = kettleMoveX;
   kettleY = noseY;
   push();
   translate(kettleX, kettleY);
   angle = atan2((noseX - leftEyeX), (noseY - leftEyeY));
   //判断水壶在左边还是右边
   if (kettleX < width / 2) {
      push();
      rotate(angle + PI / 8);
      image(kettle_left, 0, 0);
      if (angle < -0.9) {
         scale(-1, 1);
         image(waterDrop, 140, -10);
         waterBooleanL = 1;
      } else {
         waterBooleanL = 0;
      }
      pop();
   } else {
      push();
      rotate(angle + PI / 2);
      image(kettle_right, 0, 0);
      if (angle > -0.8) {
         image(waterDrop, 140, -10);
         waterBooleanR = 1;
      } else {
         waterBooleanR = 0;
      }
      pop();
   }
   //console.log(waterBooleanR,waterBooleanL);
   pop();
}

////////////////////////---弹窗---////////////////////////////////////////////////////////////////

function alert() {

   alertPanel.show();
   restarButton.show();
   quitButton.show();
   character2.show();
   scoreImg2.show();
   p2.show();
   p3.show();
   h1.show();

   //alertPanel.position(0, -300);
   character2.position(width / 2 - 300, height / 2 - 35);
   character2.style('width', '50px');
   p2.position(width / 2 - 240, height / 2 - 40);
   p2.style('font-size', '22px');
   h1.html(round((scoreCount - 1) / 30));
   h1.position(width / 2 + 40, height / 2 - 47);
   p3.position(width / 2 + 90, height / 2 - 40);
   p3.style('font-size', '22px');

   restarButton.position(width / 2 + 10, height / 2 + 120);
   quitButton.position(width / 2 - 200, height / 2 + 120);
}


///////////////////---游戏画面---///////////////////////////////////////////////////////////////////////
let ms1, sTime1, waitTime1, timeCount1; //定义计时变量
let ms2, sTime2, waitTime2, timeCount2;

function waterFlowers(R, L) {

   distLeft = dist(L.x, L.y, kettleX, kettleY);
   distRight = dist(kettleX, kettleY, R.x, R.y);
   //console.log(distLeft);

   //如果开始浇水并且水壶的位置靠近花朵
   //则加载gif动画
   //并开始计时

   if (waterBooleanR == 1 && distRight < 300) {
      flowerR.hide();
      flowerOpenR.show();
      //flowerOpenR.play();
      flowerOpenR.position(R.x - 5, R.y);
      flowerOpenR.style('width', '300px');
      // clockCount(waitTime);
      //计时
      ms1 = millis();
      sTime1 = ms1 - waitTime1;
      timeCount1 = floor(sTime1 / 1000);
      Countdown1.show();

      if (ms1 >= 5000 + waitTime1) {
         //timeCount1 = 5;
         Countdown1.html('0');
      } else {
         Countdown1.html(5 - timeCount1);
      }

   } else {
      flowerOpenR.position(L.x - 5, L.y);
      flowerR.show();
      flowerOpenR.hide();
      // flowerOpenR.stop();
      //计时
      waitTime1 = millis(); //记录程序运行到点击开始之前经过的时间
      Countdown1.hide();
   }



   if (waterBooleanL == 1 && distLeft < 600) {
      flowerL.hide();
      flowerOpenL.show();
      flowerOpenL.position(L.x - 5, L.y);
      flowerOpenL.style('width', '300px');

      //计时
      ms2 = millis();
      sTime2 = ms2 - waitTime2;
      timeCount2 = floor(sTime2 / 1000);
      Countdown2.show();

      if (ms2 >= 5000 + waitTime2) {
         //timeCount2 = 5;
         Countdown2.html('0');
      } else {
         Countdown2.html(5 - timeCount2);
      }

   } else {
      flowerOpenL.position(R.x - 5, R.y);
      flowerL.show();
      flowerOpenL.hide();
      waitTime2 = millis(); //记录程序运行到点击开始之前经过的时间
      Countdown2.hide();
   }

   //console.log(ms1, ms2, "ms");
   console.log(timeCount1, timeCount2);
   // console.log(waitTime1, waitTime2);


}

function warmUpRight() {
   //当计时完成则计分并播放音效
   if (timeCount1 == 5 || timeCount2 == 5) {
      timeCount2++;
      timeCount1++
      scoreSound.play();
   } else {
      scoreSound.stop();
   }

}
let t1, t2;

function gameRight() {
   //当计时完成则计分并播放音效

   if (timeCount1 == 5 || timeCount2 == 5) {
      scoreCount++;
      timeCount2++;
      timeCount1++
      scoreSound.play();
      scoreP.html(round((scoreCount - 1) / 30));
   } else {
      scoreSound.stop();
   }
   //console.log(timeCount1, timeCount2);
   //console.log(scoreCount);
}