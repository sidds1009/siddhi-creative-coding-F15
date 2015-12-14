var capture;

function setup(){
  createCanvas(390,5240);
  capture=createCapture(VIDEO);
  capture.size(100,100);
}
function draw(){
background(255);
image(capture, 0, 0, 320, 240);
filter('BLUR');
}
