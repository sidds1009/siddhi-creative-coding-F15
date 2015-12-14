var space;
var value=0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // specify multiple formats for different browsers
  space = createVideo(['media/anni003.mp4']);
  space.loop(); // set the video to loop and start playing
  space.volume(0);//we set the volume to 0 because we don't want
                  //sound
  space.showControls();
  //a centered video element
  space.position(windowWidth/2 - (space.width/2),windowHeight/2 - (space.height/2));
  frameRate(5);
  text('click here to play', width/2, height/2);

}
function draw() {
  background(255);
  space.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - space.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}


// // function draw() {
//   background(244, 248, 252);
//   line(mouseX, mouseY, pmouseX, pmouseY);
//   print(pmouseX + " -> " + mouseX);
//   // background(255);
//   text("current video time: " + space.time(), 20,32);
//   text("video duration: " + space.duration(), 20,64);
// }

// function mousePressed(){
//   if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
//     space.play();
//   }
  
// }
 
  

// function draw(){
//   background(255);
//   text("current video time: " + space.time(), 20,32);
//   text("video duration: " + space.duration(), 20,64);

// }