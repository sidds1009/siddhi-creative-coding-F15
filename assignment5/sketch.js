var angleS = 0.0;
var angleM = 0.0;
var angleH = 0.0;
var sx=0
var sy=0;
var mx=0
var my=0;
var hx=0
var hy=0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(0);
  translate(width/2, height/2); 
 
  fill("#727B84");
  ellipse(0,0,400,400);
  fill("#A2ADBC"); 
  ellipse(0,0,300,300); 
  fill("#D9E2E1");
  ellipse(0,0,200,200);
  
  angleS = map(second(), 0, 60, 0, TWO_PI) - HALF_PI; 
  angleM = map(minute(), 0, 60, 0, TWO_PI) - HALF_PI; 
  angleH = map(hour(), 0, 24, 0, TWO_PI*2) - HALF_PI; 
  
  sx = cos(angleS) * 180; //second x
  sy = sin(angleS) * 180; //second y
  mx = cos(angleM) * 170; //minute x
  my = sin(angleM) * 170; //minute y
  hx = cos(angleH) * 100; //hour x
  hy = sin(angleH) * 100; //hour y

  
  stroke("#FFCC00"); 
  line(0,0,sx,sy); 
  stroke("#003366"); 
  strokeWeight(2); 
  line(0,0,mx,my); 
  strokeWeight(4); 
  line(0,0,hx,hy); 
}
