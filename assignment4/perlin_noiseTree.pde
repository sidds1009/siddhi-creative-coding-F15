
float yoff = 0;
// Random seed to control randomness while drawing the tree
int seed = 5;


void setup() {
  size(640, 360);
  smooth();
}

void draw() {
  background(255);
  fill(0);
  text("Click mouse to generate a new tree", 10, height-20);

  stroke(0);
  // Start the tree from the bottom of the screen
  translate(width/2, height);
  // Move alogn through noise
  yoff += 0.005;
  randomSeed(seed);
  // Start the recursive branching!
  branch(100, 0);
}


void mousePressed() {
  // New tree starts with new noise offset and new random seed
  yoff = random(1000);
  seed = millis();
}


void branch(float h, float xoff) {
  // thickness of the branch is mapped to its length
  float sw = map(h, 2, 100, 1, 5);
  strokeWeight(sw);
  // Draw the branch
  line(0, 0, 0, -h);
  
  translate(0, -h);

  h *= 0.7f;
  
  
  xoff += 0.1;

  if (h > 4) {
   
    int n = int(random(1, 4));
    for (int i = 0; i < n; i++) {
 

      float theta = map(noise(xoff+i, yoff), 0, 1, -PI/2, PI/2);
      if (n%2==0) theta *= -1;
      
      pushMatrix();      
      rotate(theta);     
      branch(h, xoff);
      popMatrix();       
    }
  }
}