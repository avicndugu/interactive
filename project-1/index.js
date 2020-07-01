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

let button;
function setup() {
  createCanvas(600, 600);
  background(220);
  button = createButton("GO");
  button.position(550, 200);
  button.mousePressed(playSteps);

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

  rect(500,50,tileWidth/2, tileLength/2);
  rect(500,0,tileWidth/2, tileLength/2);
  rect(450,50,tileWidth/2, tileLength/2);
  rect(550, 50,tileWidth/2, tileLength/2);

  text(moves.displayRecord, 450, 300);
}


// ARROW BUTTONS CONTROLS
function keyReleased(){
        // DOWN
    if (keyCode===40){
        down();
    }
    // UP
    if (keyCode===38){
        up();
    }
    // LEFT
    if (keyCode===37){
        left();
    }
    // RIGHT
    if (keyCode===39){
        right();
    }
}

// MOUSE CLICK CONTROLS
function mouseClicked() {
  // DOWN
  if(mouseX>500 && mouseX<550 && mouseY>50 && mouseY<100){
    down();
  }
  // UP
  if(mouseX>500 && mouseX<550 && mouseY>0 && mouseY<50){
    bot.Y = bot.Y - 100;
    up();
  }
  // LEFT
  if(mouseX>450 && mouseX<500 && mouseY>50 && mouseY<100){
    left();
  }
  // RIGHT
  if(mouseX>550 && mouseX<600 && mouseY>50 && mouseY<100){
    right();
  }
}

// // ADD a wrapper function that will allow this script to run on non-desktop touchscreen devices only.
// function touchStarted() {
//   // DOWN
//   if(touches[0].x>500 && touches[0].x<550 && touches[0].y>50 && touches[0].y<100){
//     down();
//   }
//     // UP
//   if(touches[0].x>500 && touches[0].x<550 && touches[0].y>0 && touches[0].y<50){
//     up();
//   }
//   // LEFT
//   if(touches[0].x>450 && touches[0].x<500 && touches[0].y>50 && touches[0].y<100){
//     left();
//   }
//   // RIGHT
//   if(touches[0].x>550 && touches[0].x<600 && touches[0].y>50 && touches[0].y<100){
//     right();
//   }
// // touch is firing the event twice. return false keeps the firing once.
// return false;
// }



function up() {
    moves.record.push(moves.up)
    moves.displayRecord.push("UP")
}
function down() {
    moves.record.push(moves.down)
    moves.displayRecord.push("DOWN")
}
function left() {
    moves.record.push(moves.left)
    moves.displayRecord.push("LEFT")
}
function right() {
    moves.record.push(moves.right)
    moves.displayRecord.push("RIGHT")
}


function showSteps(){

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