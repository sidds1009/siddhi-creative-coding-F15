var man;

var dest;//destination for our running cat
var isRunning = false;
var dX = 170;
function setup() {
  frameRate(15);
  createCanvas(windowWidth, 800);

  man = loadImage('assets/man.jpg');
}

var sX = 0, sY = 0;

function draw() {
  clear();
  // image(savanna,0,0,savanna.width,savanna.height,
  // 0,0,width,savanna.height);

  // Animate running cat
  
  sX += 300;
  if (sX > 300) {
    sX = 0;
    sY += 150;
    if (sY === 600) {
      sY = 0;
    }
  }
  if(isRunning){
    println("running");
    runToDest();
    if(dX >= dest.x){
      sX = 170;
      isRunning = false;      
    }

  } else{
    image(man, sX, sY, 300, 150, 170, 100, 300, 150);
  }
  // Show full sprite sheet for reference
  image(man, 0, 300, 300, 300);
}
function runToDest(){
  dX +=5.0;
  image(man, sX, sY, 300, 150, dX, 100, 300, 150);
}

function mouseClicked(){
  isRunning = true;
  dest= createVector(mouseX,mouseY);
  println(dest.x);
}