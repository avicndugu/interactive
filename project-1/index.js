var bot = {
    X:50,
    Y:50
}
let value=0;
var y=[];
var tileX=[0,100,200,300];
var tileY=[0,100,200,300];
var tileWidth=100;
var tileLength =100;

function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  clear()
  rect(tileX[0],tileY[0],tileWidth, tileLength);
  rect(tileX[1],tileY[0],tileWidth, tileLength);
  rect(tileX[2],tileY[0],tileWidth, tileLength);
  rect(tileX[3],tileY[0],tileWidth, tileLength);
  rect(tileX[0],tileY[1],tileWidth, tileLength);
  rect(tileX[1],tileY[1],tileWidth, tileLength);
  rect(tileX[2],tileY[1],tileWidth, tileLength);
  rect(tileX[3],tileY[1],tileWidth, tileLength);
  rect(tileX[0],tileY[2],tileWidth, tileLength);
  rect(tileX[1],tileY[2],tileWidth, tileLength);
  rect(tileX[2],tileY[2],tileWidth, tileLength);
  rect(tileX[3],tileY[2],tileWidth, tileLength);
  rect(tileX[0],tileY[3],tileWidth, tileLength);
  rect(tileX[1],tileY[3],tileWidth, tileLength);
  rect(tileX[2],tileY[3],tileWidth, tileLength);
  rect(tileX[3],tileY[3],tileWidth, tileLength);


  ellipse(bot.X,bot.Y,50,50);
    // frameRate(0.1)

  // if(keyIsDown(DOWN_ARROW)){
  //   // bot.Y = bot.Y + 100;
  // }else{
  //   // bot.Y = bot.Y;
  // }
  // if(keyIsDown(UP_ARROW)){
  //   // bot.Y = 50;
  // }
  // if(keyIsDown(LEFT_ARROW)){
  //   bot.X = 50;
  // }
  // if(keyIsDown(RIGHT_ARROW)){
  //   bot.X = 150;
  // }
  rect(500,50,tileWidth/2, tileLength/2);
  rect(500,0,tileWidth/2, tileLength/2);
  rect(450,50,tileWidth/2, tileLength/2);
  rect(550, 50,tileWidth/2, tileLength/2);

// TOUCH SCREEN CONTROLS
  // console.log(touches);
  // console.log(touches[0])
//   0:
// id: 0
// winX: 480.71575927734375
// winY: 100.06315612792969
// x: 472.71575927734375
// y: 92.06315612792969

// let display = touches.length + ' touches';
//   text(display, 5, 10);
}


// ARROW BUTTONS CONTROLS
function keyReleased(){
    console.log(keyCode);
    if (keyCode===40 && bot.Y<350){
        bot.Y = bot.Y + 100; //down
        console.log(bot.Y) 
    }
    if (keyCode===38 && bot.Y>50){
        bot.Y = bot.Y - 100; //up
    }
    if (keyCode===37 && bot.X>50){
        bot.X = bot.X - 100; //left
    }
    if (keyCode===39 && bot.X<350){
        bot.X = bot.X + 100; //right
    }
}

// MOUSE CLICK CONTROLS
function mouseClicked() {
  console.log(mouseX, mouseY)
  // DOWN
  if(mouseX>500 && mouseX<550 && mouseY>50 && mouseY<100 && bot.Y<350){
    bot.Y = bot.Y + 100;
    // console.log("down");
  }
  // UP
  if(mouseX>500 && mouseX<550 && mouseY>0 && mouseY<50 && bot.Y>50){
    bot.Y = bot.Y - 100;
    // console.log("up");
  }
  // LEFT
  if(mouseX>450 && mouseX<500 && mouseY>50 && mouseY<100 && bot.X>50){
    bot.X = bot.X - 100;
    // console.log("left");
  }
  if(mouseX>550 && mouseX<600 && mouseY>50 && mouseY<100 && bot.X<350){
    bot.X = bot.X + 100; //right
    // console.log("right");
  }
}

function touchStarted() {
// console.log(touches)
// console.log(touches[0].x)
// console.log(touches[0].y)
  if(touches[0].x>500 && touches[0].x<550 && touches[0].y>50 && touches[0].y<100 && bot.Y<350){
    bot.Y = bot.Y + 100;
    console.log(touches[0].x)
    console.log(touches[0].y)
  }


// touch is firing the event twice. return false keeps the firing once.

return false;
}


// wget
// https://github.com/4ian/GDevelop/releases/download/v5.0.0-beta97/GDevelop-5-5.0.0-beta97.AppImage