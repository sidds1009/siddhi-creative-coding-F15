var space;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // specify multiple formats for different browsers
  space = createVideo(['media/anni003.mp4']);
  space.loop(); // set the video to loop and start playing
  space.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
  space.volume(0);//we set the volume to 0 because we don't want
                  //sound
}

function draw() {
  background(150);
  image(space,10,10); // draw the video frame to canvas
  filter('GRAY');
  image(space,150,150); // draw a second copy to canvas
  filter('BLUR');
  image(space,300,300); // draw a second copy to canvas
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