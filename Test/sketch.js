var img, galaxy, taurus, aries, leo, virgo, cancer, capricon,
  scorpio, aquarius, libra, gemini, sagittarius, pisces;
  
var btnAries, btnTaurus, btnLeo, btnVirgo, btnCancer, btnCapricon,
  btnScorpio,btnAquarius, btnLibra,btnGemini, btnSagittarius, btnPisces;
  
var sngAries, sngTaurus, sngLeo, sngVirgo, sngCancer, sngCapricon, 
  sngScorpio, sngAquarius, sngLibra, sngGemini, sngSagittarius, sngPisces;
  
var r,g,b;
var greeting;
var zodiac = 'Zodiac';
// var frameCount = 0;
function setup(){
  
  galaxy = loadImage("assets/galaxy.jpg");
  aries = loadImage("assets/aries.jpeg");
  taurus = loadImage("assets/taurus.jpg");
  leo = loadImage("assets/leo.jpeg");
  virgo = loadImage("assets/virgo.jpg");
  cancer = loadImage("assets/cancer.jpeg");
  capricon = loadImage("assets/capricorn.jpg");
  scorpio = loadImage("assets/scorpio.jpg");
  aquarius = loadImage("assets/aquarius.jpg");
  libra = loadImage("assets/libra.jpeg");
  gemini = loadImage("assets/gemini.jpg");
  sagittarius = loadImage("assets/sagittarus.jpg");
  pisces = loadImage("assets/pisces.jpg");
  
  greeting = createElement('h2', 'ZODIAC');
  greeting.position(windowWidth/2 - 120, 15);
  
  createCanvas(windowWidth, windowHeight, WEBGL);

  img = galaxy;
  
  btnAquarius = createButton('Aquarius');
  btnAquarius.position(45,150);
  btnAquarius.mousePressed(Aquarius);
  
  btnPisces = createButton('Pisces');
  btnPisces.position(45,230);
  btnPisces.mousePressed(Pisces);
  
  btnAries = createButton('Aries');
  btnAries.position(45,310);
  btnAries.mousePressed(Aries);
  
  btnTaurus = createButton('Taurus');
  btnTaurus.position(45,390);
  btnTaurus.mousePressed(Taurus);
  
  btnGemini = createButton('Gemini');
  btnGemini.position(45,470);
  btnGemini.mousePressed(Gemini);
  
  btnCancer = createButton('Cancer');
  btnCancer.position(45,550);
  btnCancer.mousePressed(Cancer);
  
  btnLeo = createButton('Leo');
  btnLeo.position(windowWidth - 125,150);
  btnLeo.mousePressed(Leo);
  
  btnVirgo = createButton('Virgo');
  btnVirgo.position(windowWidth - 125,230);
  btnVirgo.mousePressed(Virgo);
  
  btnLibra = createButton('Libra');
  btnLibra.position(windowWidth - 125,310);
  btnLibra.mousePressed(Libra);
  
  btnScorpio = createButton('Scorpio');
  btnScorpio.position(windowWidth - 125,390);
  btnScorpio.mousePressed(Scorpio);
  
  btnSagittarius = createButton('Sagittarius');
  btnSagittarius.position(windowWidth - 125,470);
  btnSagittarius.mousePressed(Sagittarius);
  
  btnCapricon = createButton('Capricon');
  btnCapricon.position(windowWidth - 125,550);
  btnCapricon.mousePressed(Capricon);
  
  btnCapricon.size(100, 35);
  btnSagittarius.size(100, 35);
  btnScorpio.size(100, 35);
  btnLibra.size(100, 35);
  btnVirgo.size(100, 35);
  btnTaurus.size(100, 35);
  btnCancer.size(100, 35);
  btnAries.size(100, 35);
  btnGemini.size(100, 35);
  btnAquarius.size(100, 35);
  btnPisces.size(100, 35);
  btnLeo.size(100, 35);

}

function preload() {
  sngAries = loadSound('assets/aries.wav');
  sngTaurus = loadSound('assets/tarus.mp3');
  sngLeo = loadSound('assets/leo.wav');
  sngVirgo = loadSound('assets/virgo.mp3');
  sngCancer = loadSound('assets/cancer.mp3');
  sngCapricon = loadSound('assets/capricon.wav');
  sngScorpio = loadSound('assets/scorpio.mp3');
  sngAquarius = loadSound('assets/aquarius.mp3');
  sngLibra = loadSound('assets/libra.mp3');
  sngGemini = loadSound('assets/gemini.wav');
  sngSagittarius = loadSound('assets/sagittarius.wav');
  sngPisces = loadSound('assets/pisces.wav');
}

function Aries(){
  checkSongIsPlaying();
  sngAries.play();
  zodiac = 'Aries';
  img = aries;
  r = random(255);
  g = random(255);
  b = random(255);
  redraw();
}
function Taurus(){
  checkSongIsPlaying();
  sngTaurus.play();
  zodiac = 'Taurus';
  r = random(255);
  g = random(255);
  b = random(255);
  img = taurus;
  redraw();
}

function Virgo(){
  checkSongIsPlaying();
  sngVirgo.play();
  zodiac = 'Virgo';
  r = random(255);
  g = random(255);
  b = random(255);
  img = virgo;
  redraw();
}

function Cancer(){
  checkSongIsPlaying();
  sngCancer.play();
  zodiac = 'Cancer';
  r = random(255);
  g = random(255);
  b = random(255);
  img = cancer;
  redraw();
}

function Gemini(){
  checkSongIsPlaying();
  sngGemini.play();
  zodiac = 'Gemini';
  r = random(255);
  g = random(255);
  b = random(255);
  img = gemini;
  redraw();
}

function Leo(){
  checkSongIsPlaying();
  sngLeo.play();
  zodiac = 'Leo';
  r = random(255);
  g = random(255);
  b = random(255);
  img = leo;
  redraw();
}

function Libra(){
  checkSongIsPlaying();
  sngLibra.play();
  zodiac = 'Libra';
  r = random(255);
  g = random(255);
  b = random(255);
  img = libra;
  redraw();
}

function Sagittarius(){
  checkSongIsPlaying();
  sngSagittarius.play();
  zodiac = 'Sagittarius';
  r = random(255);
  g = random(255);
  b = random(255);
  img = sagittarius;
  redraw();
}

function Scorpio(){
  checkSongIsPlaying();
  sngScorpio.play();
  zodiac = 'Scorpio';
  r = random(255);
  g = random(255);
  b = random(255);
  img = scorpio;
  redraw();
}


function Pisces(){
  checkSongIsPlaying();
  sngPisces.play();
  zodiac = 'Pisces';
  r = random(255);
  g = random(255);
  b = random(255);
  img = pisces;
  redraw();
}

function Capricon(){
  checkSongIsPlaying();
  sngCapricon.play();
  zodiac = 'Capricon';
  r = random(255);
  g = random(255);
  b = random(255);
  img = capricon;
  redraw();
}

function Aquarius(){
  checkSongIsPlaying();
  sngAquarius.play();
  zodiac = 'Aquarius';
  r = random(255);
  g = random(255);
  b = random(255);
  img = aquarius;
  redraw();
}

function checkSongIsPlaying(){
  if (sngAquarius.isPlaying() || sngCapricon.isPlaying() || sngPisces.isPlaying() ||  sngScorpio.isPlaying() ||  sngSagittarius.isPlaying() ||  sngLibra.isPlaying() ||  sngLeo.isPlaying() || sngGemini.isPlaying() ||  sngVirgo.isPlaying() ||  sngCancer.isPlaying() || sngAries.isPlaying() || sngTaurus.isPlaying()) { // .isPlaying() returns a boolean
    sngAquarius.stop();
    sngCapricon.stop();
    sngPisces.stop();
    sngScorpio.stop();
    sngSagittarius.stop();
    sngLibra.stop();
    sngLeo.stop();
    sngGemini.stop();
    sngVirgo.stop();
    sngCancer.stop();
    sngAries.stop();
    sngTaurus.stop();
  }
}

function draw(){
  background(r,g,b);

  greeting.html('Now Showing:- '+zodiac);
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(180);
  pop();
  ar= 0;

}