var concordance;
var tokens;
var counters=0;
var rawtext;

function preload()
{
  rawtext= loadStrings("data/aliceinwonderland.txt");

}
function setup()
{
  createCanvas(windowWidth, windowHeight);
  
  concordance=createNumberDict();
  
  var allText=join(rawtext,"\n").toLowerCase();
  tokens=splitTokens(allText,",.?!:;\n");
}

function draw(){
  background(51);
  fill(255);
  noStroke();
  
  if(counter<tokens.length){
    var s=tokens[counter];
    counter++;
    concordance.increment(s);
  }
  var x=0;
  var y=48;
  concordance.sortValuesReverse();
  
  var keys=concordance.keyArray();
  
  for(var i=0;i<keys.length; i++){
    var word=keys[i];
    var count=concordance.get(word);
    
    if(count>3){
      var fsize=constrain(count,0,48);
      textSize(fsize);
      text(word,x,y);
      
      x+=textWidth(word+" ");
    }
  if(i>width){
    x=0;
  }
    
  }
  
  
}