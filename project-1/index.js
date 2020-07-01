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

var moves = {
    up:[0,-100],
    down:[0,100],
    left:[-100,0],
    right:[100,0],
    record:[],
    displayRecord:[],
}
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
    // // DOWN
    // if (keyCode===40 && bot.Y<350){
    //     // bot.Y = bot.Y + 100;
    //     down();
    // }
    // // UP
    // if (keyCode===38 && bot.Y>50){
    //     // bot.Y = bot.Y - 100;
    //     up();
    // }
    // // LEFT
    // if (keyCode===37 && bot.X>50){
    //     // bot.X = bot.X - 100;
    //     left();
    // }
    // // RIGHT
    // if (keyCode===39 && bot.X<350){
    //     // bot.X = bot.X + 100;
    //     right();
    // }
        // DOWN
    if (keyCode===40){
        // bot.Y = bot.Y + 100;
        down();
    }
    // UP
    if (keyCode===38){
        // bot.Y = bot.Y - 100;
        up();
    }
    // LEFT
    if (keyCode===37){
        // bot.X = bot.X - 100;
        left();
    }
    // RIGHT
    if (keyCode===39){
        // bot.X = bot.X + 100;
        right();
    }
}

// MOUSE CLICK CONTROLS
function mouseClicked() {
  // DOWN
  if(mouseX>500 && mouseX<550 && mouseY>50 && mouseY<100 && bot.Y<350){
    // bot.Y = bot.Y + 100;
  }
  // UP
  if(mouseX>500 && mouseX<550 && mouseY>0 && mouseY<50 && bot.Y>50){
    bot.Y = bot.Y - 100;
  }
  // LEFT
  if(mouseX>450 && mouseX<500 && mouseY>50 && mouseY<100 && bot.X>50){
    bot.X = bot.X - 100;
  }
  // RIGHT
  if(mouseX>550 && mouseX<600 && mouseY>50 && mouseY<100 && bot.X<350){
    bot.X = bot.X + 100;
  }
}

// ADD a wrapper function that will allow this script to run on non-desktop touchscreen devices only.
function touchStarted() {
  // DOWN
  if(touches[0].x>500 && touches[0].x<550 && touches[0].y>50 && touches[0].y<100 && bot.Y<350){
    bot.Y = bot.Y + 100;
  }
    // UP
  if(touches[0].x>500 && touches[0].x<550 && touches[0].y>0 && touches[0].y<50 && bot.Y>50){
    bot.Y = bot.Y - 100;
  }
  // LEFT
  if(touches[0].x>450 && touches[0].x<500 && touches[0].y>50 && touches[0].y<100 && bot.X>50){
    bot.X = bot.X - 100;
  }
  // RIGHT
  if(touches[0].x>550 && touches[0].x<600 && touches[0].y>50 && touches[0].y<100 && bot.X<350){
    bot.X = bot.X + 100;
  }
// touch is firing the event twice. return false keeps the firing once.
return false;
}



function up() {
    moves.record.push(moves.up)
    moves.displayRecord.push("UP")
    console.log(moves.record)
    // moves.Y.push(-100)
    // moves.X.push(0)
}
function down() {
    moves.record.push(moves.down)
    moves.displayRecord.push("DOWN")

    console.log(moves.record)
    // moves.Y.push(100);
    // moves.X.push(0);
}
function left() {
    moves.record.push(moves.left)
    moves.displayRecord.push("LEFT")
    console.log(moves.record)
    // moves.Y.push(0)
    // moves.X.push(-100)
}
function right() {
    moves.record.push(moves.right)
    moves.displayRecord.push("RIGHT")
    console.log(moves.record)
    // moves.Y.push(0)
    // moves.X.push(100)
}

function playSteps(){
    for(let i=0; i< moves.record.length; i++){
        console.log(bot.X, bot.Y);
        bot.X=bot.X + moves.record[i][0];
        bot.Y=bot.Y + moves.record[i][1];
        console.log(bot.X, bot.Y);
    }
    console.log(moves.record)
    console.log(moves.displayRecord);

}

document.querySelector(".showResult").addEventListener("click", function(){
    playSteps();
});


// wget
// https://github.com/4ian/GDevelop/releases/download/v5.0.0-beta97/GDevelop-5-5.0.0-beta97.AppImage